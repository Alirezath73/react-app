import TopFooterContent from "./TopFooterContent";

const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <TopFooterContent />
          <TopFooterContent />
          <TopFooterContent />
          <TopFooterContent />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
