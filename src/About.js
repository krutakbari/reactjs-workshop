import './style.css';

function About() {
  var a = 10;
  var b = 20;
  var c = a + b;
  var msg = '';

  if (c === 30) {
    msg = `C Value is ${c}`;
  } else {
    msg = 'C Value is Not 30';
  }

  var mycolor = {
    backgroundColor: 'blue',
    color: 'white'
  };

  return (
    <div>
      <h1>About Component</h1>
      <p>A Value is {a}</p>
      <p>B Value is {b}</p>
      <p>Sum (a + b) = {c}</p>
      <p style={{ backgroundColor: 'red', color: 'white' }}>I am Inline CSS</p>
      <p style={mycolor}>I am Internal CSS</p>
      <p className="myclass">I am Class Data</p>
    </div>
  );
}

export default About;
//div ni jagyae ReactFragment <ReactFragment>	 rakhi shakiye....orr empty <> </> rakhi shakie