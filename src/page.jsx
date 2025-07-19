import React, {useState, useEffect} from "react";

const Page = (props) => {
    const {logo1B, z01, z02, z03, z04, z05, z06} = props.allImg,
          {copyBtn, copyDone} = props.copyBtn,
          {tw, tg, pf, ray, dexs, dext} = props.socialLink
    ;

    const image3 = [
        z01, z02, z03, z04, z05, z06
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image3.length);
        }, 1 * 2000); 

        return() => clearInterval(interval);
    }, [image3.length]);

    const copyText = "J1rfosSdRqBbpSegRpCtMQDxDoVsYR41zMywoXkNYiKB";
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(copyText);
            setCopySuccess(prev => !prev);

        } catch(err){
            console.log("CA copied to clipboard!");

        }finally{
            setTimeout(() => {
                setCopySuccess(prev => !prev)
            }, 5 * 1000);
        };
    }

    return ( 
        <main className="allSectiion">
            <div className="descriptionImg">
                <span>
                    <h1>SIS THE CAT</h1>
                    <span className="logoImg1">
                        <img src={logo1B} alt="logo" />
                    </span>
                    <p>
                        Did you know that " $SIS THE CAT tickered as $SIS has arrived to secure and 
                        protect everyday transactional data left on solana blockchain by his her own brother (BRUV) " ?
                    </p>
                </span>
                <span className="logoImg2">
                    <img src={logo1B} alt="logo" />
                </span>
            </div>
            <div className="caSection">
                <span>
                    <h5>
                        Ca:
                    </h5>
                    <p>
                        J1rfosSdRqBbpSegRpCtMQDxDoVsYR41zMywoXkNYiKB
                    </p>
                </span>
                <span>
                    <img onClick={handleCopy} src={! copySuccess ? copyBtn : copyDone} alt="copy btn image" />
                </span>

            </div>
            <div className="allSC-Btn">
                <div className="allSocHandle">
                    <span><a href="https://x.com/i/communities/1946471565035741673" target="_blank"><img src={tw} alt="twitter logo" /></a></span>
                    <span><a href="https://pump.fun/coin/J1rfosSdRqBbpSegRpCtMQDxDoVsYR41zMywoXkNYiKB" target="_blank"><img src={pf} alt="pumpfun logo" /></a></span>
                    <span><a href="https://dexscreener.com/solana9mtnz8ucawniebfbsdtbyjyotzpahtdxb559whaavdax" target="_blank"><img src={dexs} alt="dexscreener logo" /></a></span>
                    <span><a href="https://www.dextools.io/app/en/solana/pair-explorer/J1rfosSdRqBbpSegRpCtMQDxDoVsYR41zMywoXkNYiKB" target="_blank"><img src={dext} alt="dextools logo" /></a></span>
                </div>
                <button><a href="https://pump.fun/coin/J1rfosSdRqBbpSegRpCtMQDxDoVsYR41zMywoXkNYiKB" target="_blank">BUY $SIS</a></button>
            </div>
            <div className="storySection">
                <h3>
                    SIS ~ IS ~ SIS
                </h3>
                <div>
                    <span>
                        <img src={image3[currentImageIndex]}  alt="img"/>
                    </span>
                    <p>
                        $SIS is the underestimated, ice-cold younger sister of $BRUV. Calm, calculated, and ready to pounce.

                        Smart, icy, and savage — she doesn’t follow trends, she sets them. Born on-chain and raised in Solana’s digital alleys, $SIS isn’t loud — she’s legendary.

                        This isn’t just a meme. It’s a movement. Sibling rivalry? No. This is a takeover.

                        Feminine. Fierce. Focused. $SIS is the main character now.
                    </p>
                </div>
            </div>
            <div className="memeSection">
                <h3>
                    SIS has nine-lives, lol..
                </h3>
                <div>
                    <span>
                        <img src={z01}  alt="img"/>
                    </span>
                    <span>
                        <img src={z02}  alt="img"/>
                    </span>
                </div>
            </div>
        </main>
    );
}
 
export default Page;