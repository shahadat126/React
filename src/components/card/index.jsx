import "./style.css";
const Index = (props) => {
  const Positon = "Junior Web Developer";
  const CourseTitle =
    "I am skilled in HTML,CSS,Bootstrap,JS,React,Python,Django";
  const fullDate = new Date();
  const date =
    fullDate.getDate() +
    "/" +
    fullDate.getMonth() +
    "/" +
    fullDate.getFullYear();
  const { titleText } = props;
  return (
    <div>
      <div className="card-style">
        <h3>{props.titleText}</h3>
        <p>{CourseTitle}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Index;
