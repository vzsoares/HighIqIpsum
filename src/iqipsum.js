import "./styles.css";
import $ from "jquery";

function iq_ipsum() {
  const words = [
    "facetious ",
    "hoax ",
    "peevish ",
    "wharf ",
    "heresy ",
    "euphemism ",
    "idyllic ",
    "junket ",
    "equivocate ",
    "dichotomy ",
    "camaraderie ",
    "quintessential ",
    "to ",
    "brusque ",
    "surrounding ",
    "beneath",
    "vicarious ",
    "barbarity ",
    "incredulous ",
    "tenaciously ",
    "exculpate ",
    "nirvana ",
    "stoic ",
    "alternatively ",
    "iconoclastic ",
    "verbose ",
    "generally speaking ",
    "in spite of ",
    "to summarise ",
    "paradox ",
    "thus ",
    "fort ",
    "night ",
    "in brief ",
    "above all ",
    "subsequently ",
    "previously ",
    "thirdly ",
    "still another ",
    "in like manner ",
    "alike ",
    "either ",
    "rather ",
    "instead ",
    "nonetheless ",
    "moreover ",
    "furthermore ",
    "truly ",
    "unquestionably ",
    "god ",
    "undoubtedly ",
    "obviously ",
    "thereupon ",
    "forthwith ",
    "hence ",
    "as ",
    "due ",
    "therefore ",
    "for ",
    "nor ",
    "but ",
    "or ",
    "yet ",
    "so ",
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
    "too ",
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
  ];

  function generateIpsum() {
    let generatedIpsum = [];

    const wordAmount = Number($("#number-ipsum").val());
    const iqIpsumWordList = words;

    function getRandomNumber() {
      return Math.floor(Math.random() * iqIpsumWordList.length - 1);
    }

    for (let i = 0; i < wordAmount; i++) {
      let iqIpsumWord = iqIpsumWordList[getRandomNumber()];

      // avoid repeated word
      while (iqIpsumWord === generatedIpsum[i - 1]) {
        iqIpsumWord = iqIpsumWordList[getRandomNumber()];
      }

      // uppercase first word
      if (i === 0) {
        generatedIpsum.push(
          iqIpsumWord.charAt(0).toUpperCase() + iqIpsumWord.slice(1)
        );
      }

      // add period
      else if (i === wordAmount - 1) {
        generatedIpsum.push(iqIpsumWord.replace(" ", "") + ".");
      }

      // add normal word
      else {
        generatedIpsum.push(iqIpsumWord);
      }
    }

    // render result
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
            <button className='generate-ipsum' onClick={generateIpsum}>
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
