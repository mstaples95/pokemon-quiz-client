import "./poke-info.scss";

const PokeInfo = ({ localdata }) => {
  let filterData = [];
  const NumberOfQuestions = 10;

  const validateAnswers = () => {
    let UserAnswers = [];
    let selected = document.getElementsByTagName("input");

    // Collects all user answers into UserAnswers
    for (let i = 0; i < selected.length; i++) {
      if ((selected[i].type = "radio")) {
        if (selected[i].checked) UserAnswers.push(selected[i].value);
      }
    }
    console.log(UserAnswers);
  };

  for (let i = 0; i < NumberOfQuestions; i++) {
    filterData.push(localdata[Math.floor(Math.random() * localdata.length)]);
  }

  return (
    <div className="poke-info">
      <div className="input-container">
        <label>First Name:</label>
        <input type="text" id="firstName" />
      </div>
      <form className="info-container">
        {filterData.map(({ question, answers, typeAnswer }, index) => {
          return (
            <div className="info-btn">
              <p> {question} </p>
              <input type="radio" name={index + 1} value={typeAnswer[0]} />
              {answers[0]}
              <input type="radio" name={index + 1} value={typeAnswer[1]} />
              {answers[1]}
              <input type="radio" name={index + 1} value={typeAnswer[2]} />
              {answers[2]}
              <input type="radio" name={index + 1} value={typeAnswer[3]} />
              {answers[3]}
            </div>
          );
        })}
        <input type="submit" onClick={validateAnswers} />
      </form>
    </div>
  );
};

export default PokeInfo;
