import "./styles.css";
import $ from "jquery";

function iq_ipsum(props) {
  // const newWords =
  //   "IQ ,whilst ,relies ,whomst ,thou ,thee ,thy ,thine ,art ,crapulous ,grubble ,may ,perhaps ,implies ,knaped ,absolutely ,concludes , that ,visage ,remarkable ,my ,possess ,spoken ,aliment ,abroad ,auditioned ,bane ,conditioned ,conjure ,drought ,expectations ,of ,achievement ,needless ,to ,say ,'tis ,'tween ,besought ,deem ,durstn't ,esteem ,foretold ,forsake ,keen ,malefactor ,obeisance ,reckoned ,tidings ,from ,ridge ,ere ,in spite ,despite ,fact ,deprecated ,prior ,connoisseur ,inquiry ,ponder ,cogitate ,scrutinize ,being ,lad ,youngster ,juvenile ,fellow ,acquaintance ,avaricious ,lecturer ,book ,university ,coadjutor ,flawless ,almanac ,wouldn't ,worthlessness ,insist ,neglect ,disallow ,authorize ,campus ,compel ";
  // const newToggles = newWords.split(",");

  // console.log(newWords.split(","));

  var iqIpsum = {
    smartTongue: {
      words: [
        "IQ ",
        "whilst ",
        "relies ",
        "whomst ",
        "thou ",
        "thee ",
        "thy ",
        "thine ",
        "art ",
        "crapulous ",
        "grubble ",
        "may ",
        "perhaps ",
        "implies ",
        "knaped ",
        "absolutely ",
        "concludes ",
        " that ",
        "visage ",
        "remarkable ",
        "my ",
        "possess ",
        "spoken ",
        "aliment ",
        "abroad ",
        "auditioned ",
        "bane ",
        "conditioned ",
        "conjure ",
        "drought ",
        "expectations ",
        "of ",
        "achievement ",
        "needless ",
        "to ",
        "say ",
        "'tis ",
        "'tween ",
        "besought ",
        "deem ",
        "durstn't ",
        "esteem ",
        "foretold ",
        "forsake ",
        "keen ",
        "malefactor ",
        "obeisance ",
        "reckoned ",
        "tidings ",
        "from ",
        "ridge ",
        "ere ",
        "in spite ",
        "despite ",
        "fact ",
        "deprecated ",
        "prior ",
        "connoisseur ",
        "inquiry ",
        "ponder ",
        "cogitate ",
        "scrutinize ",
        "being ",
        "lad ",
        "youngster ",
        "juvenile ",
        "fellow ",
        "acquaintance ",
        "avaricious ",
        "lecturer ",
        "book ",
        "university ",
        "coadjutor ",
        "flawless ",
        "almanac ",
        "wouldn't ",
        "worthlessness ",
        "insist ",
        "neglect ",
        "disallow ",
        "authorize ",
        "campus ",
        "compel ",
      ],
    },
  };

  var generatedIpsum = [];

  function generateIspum(e) {
    generatedIpsum = [];

    var quotes = Number($("#number-ipsum").val());
    var iqIpsumToggles = iqIpsum.smartTongue.words;
    // var iqIpsumToggles = newToggles;
    for (var i = 0; i < quotes; i++) {
      var randomNumber = Math.floor(Math.random() * iqIpsumToggles.length);
      var iqIpsumText = iqIpsumToggles[randomNumber];
      if (i === 0) {
        generatedIpsum.push(
          iqIpsumText.charAt(0).toUpperCase() + iqIpsumText.slice(1)
        );
      } else if (i === quotes - 1) {
        generatedIpsum.push(iqIpsumText.replace(" ", "") + ".");
      } else {
        generatedIpsum.push(iqIpsumText);
      }
    }

    $(".output-ipsum").html(generatedIpsum);
  }
  return (
    <div className='parent'>
      <div className='hero-section'>
        <h1 className='hero-h1'>Very High Iq Ipsum</h1>
        <div className='wrapper'>
          <div className='controls-container'>
            <input
              type='number'
              id='number-ipsum'
              className='text-input'
              placeholder='Sentences'
              defaultValue='20'
            />
            <button className='generate-ipsum' onClick={generateIspum}>
              Output Knowledge
            </button>
          </div>
          <div className='text-output'>
            <section className='output-ipsum'></section>
          </div>
        </div>
        {/* footer */}
        <div className='iq-footer'>
          <div className='inspired'>
            <p style={({ textAlign: "center" }, { paddingBottom: "16px" })}>
              Inspired by <span> </span>
              <a
                href='https://codepen.io/richfinelli/pen/bpzwQJ'
                target='_blank'
                rel='noreferrer'
                style={({ color: "#063e23" }, { fontSize: "18px" })}
              >
                Rich Finelli <span> </span>
              </a>
              and <span> </span>
              <a
                href='https://github.com/RigorMortisTortoise/bob-ross-lorem-ipsum'
                target='_blank'
                rel='noreferrer'
              >
                Holly Burleson
              </a>
            </p>
          </div>
          <a
            href='https://github.com/vzsoares'
            target='_blank'
            rel='noreferrer'
            className='github'
          >
            <i className='fab fa-github-square'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default iq_ipsum;
