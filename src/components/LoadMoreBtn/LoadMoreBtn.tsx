interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;