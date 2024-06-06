import ReactMarkdown from "react-markdown";
import useFetch from "./useFetch";
import useImage from "./useImage";
import PropTypes from "prop-types";
import remarkGfm from "remark-gfm";
import "../../styles/github-markdown.css"; // 引入基础的markdown样式
import "../../styles/github-markdown-light.css"; // 引入基础的markdown样式
import "../../styles/github-markdown-dark.css"; // 引入基础的markdown样式

// 主组件
const FetchComponent = ({ isDarkMode }) => {
  const textFileUrl = "../../public/markdown 基本语法.md"; // 替换为实际文本文件路径
  const imageFileUrl = "../../public/图片URL.jpg"; // 替换为实际图片文件路径

  const {
    data: text,
    loading: textLoading,
    error: textError,
  } = useFetch(textFileUrl);
  const {
    imageData: imageUrl,
    loading: imageLoading,
    error: imageError,
    dimensions,
  } = useImage(imageFileUrl);

  if (textLoading || imageLoading) {
    return <div>加载中...喵~</div>;
  }

  if (textError || imageError) {
    return <div>加载失败: {textError?.message || imageError?.message}喵~</div>;
  }
  return (
    <>
      {imageUrl && (
        <img
          src={imageFileUrl}
          alt="random"
          width="100%"
          height="auto"
          className="inset-0 opacity-0"
        />
      )}
      <div
        className={`${
          isDarkMode
            ? "bg-background markdown-body-dark"
            : "bg-white markdown-body-light"
        } p-4 markdown-body`}
      >
        <h1>111</h1>
        <h2>111</h2>
        <h3>111</h3>
        <p>111</p>
        {text && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        )}
      </div>
    </>
  );
};

FetchComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default FetchComponent;
