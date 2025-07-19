const currentYr = new Date().getFullYear();

export default function Footer(){
    return(
        <div className="footDown">
            <p>
                © {currentYr} - $SISI • All Rights Reserved
            </p>
        </div>
    )
} 