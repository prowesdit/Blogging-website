import { useContext, useState, createContext } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import { LuHeading1 } from "react-icons/lu";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  author: { personal_info: {} },
};
export const EditorContext = createContext({});

const Editor = () => {
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");
  let {
    userAuth: { access_token },
  } = useContext(UserContext);
  return (
    <EditorContext.Provider
      value={{ blog, setBlog, editorState, setEditorState }}
    >
      {access_token === null ? (
        <Navigate to="/signin" />
      ) : editorState == "editor" ? (
        <h1>
          <BlogEditor />
        </h1>
      ) : (
        <PublishForm />
      )}
    </EditorContext.Provider>
  );
};
export default Editor;
