import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import NoteCard from "../../components/NoteCard/index";
import Pagination from "../../components/Pagination/index";
import Spinner from "../../components/Spinner/index";
import notesAPI from "../../lib/api";
import { useNotification } from "../../contexts/NotificationContext";
import "./index.css";

function Home() {
  const { showNotification } = useNotification();
  const [searchParams, setSearchParams] = useSearchParams();
  // クエリパラメーターから値を取得
  const keyword = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [inputValue, setInputValue] = useState(keyword);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchNotes();
  }, [currentPage, keyword]);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await notesAPI.getAll({
        page: currentPage,
        limit: itemsPerPage,
        search: keyword,
      });
      setNotes(data.notes);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("メモの取得に失敗しました:", error);
      showNotification("error", "メモの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    if (window.confirm("このメモを削除してもよろしいですか？")) {
      try {
        await notesAPI.delete(id);
        await fetchNotes();
        showNotification("success", "メモを削除しました");
      } catch (error) {
        console.error("メモの削除に失敗しました:", error);
        showNotification("error", "メモの削除に失敗しました");
      }
    }
  };

  const handleSearch = () => {
    setSearchParams({ search: inputValue.trim(), page: 1 });
  };

  const moveToPage = (page) => {
    setSearchParams({ search: keyword, page: page.toString() });
  };

  const geContents = () => {
    if (loading) {
      return (
        <div className="home__notes home__notes--loading">
          <Spinner />
        </div>
      );
    }

    if (notes.length === 0) {
      return (
        <div className="home__notes home__notes--loading">
          <p>メモがありません</p>
          <p>新しいメモを作成してみましょう</p>
        </div>
      );
    }

    return (
      <div className="home__notes">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    );
  };

  return (
    <div className="home">
      <div className="home__search">
        <div className="home__search-input">
          <Search className="home__search-icon" />
          <input
            type="text"
            placeholder="メモを検索..."
            className="home__search-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="home__search-btn" onClick={handleSearch}>
            検索
          </button>
        </div>
      </div>
      {geContents()}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={moveToPage}
      />
    </div>
  );
}

export default Home;
