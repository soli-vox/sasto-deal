// eslint-disable-next-line react/prop-types
const DataNotFound = ({ text = "Data Not Found" }) => {
  return (
    <div className="text-center py-5">
      <span className="text-danger">{text}</span>
    </div>
  );
};

export default DataNotFound;
