import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Save, Calendar, Clock } from "lucide-react";
import notesAPI from "../../lib/api";
import { useNotification } from "../../contexts/NotificationContext";
import "./index.css";

function NewNote() {
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const titleInputRef = useRef(null);

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const createNote = async () => {
    setSaving(true);
    try {
      await notesAPI.create({ title, content });
      showNotification("success", "メモを作成しました！");
      navigate("/");
    } catch (error) {
      console.error("メモの作成に失敗しました:", error);
      showNotification("error", "メモの作成に失敗しました");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="new-note">
      <div className="new-note__header">
        <Link to="/" className="new-note__back-btn">
          <ArrowLeft className="new-note__back-icon" />
          戻る
        </Link>

        <div className="new-note__actions">
          <button
            className="new-note__save-btn"
            onClick={createNote}
            disabled={!title.trim() || !content.trim() || saving}
          >
            <Save className="new-note__save-icon" />
            {saving ? "保存中..." : "保存"}
          </button>
        </div>
      </div>

      <div className="new-note__content">
        <div className="new-note__meta">
          <div className="new-note__title-container">
            <input
              type="text"
              placeholder="タイトルを入力..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="new-note__title-input"
              ref={titleInputRef}
            />
          </div>
        </div>

        <div className="new-note__editor">
          <textarea
            placeholder="メモの内容を入力してください..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="new-note__textarea"
          />
        </div>
      </div>
    </div>
  );
}

export default NewNote;
