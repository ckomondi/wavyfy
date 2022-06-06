



import * as React from "react"
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Textfield, textfieldType } from "../../components/textfield"


interface INavBarProperties
{

}

function NavBar()
{
 
    const navigate = useNavigate(); 


    React.useEffect(() => 
    { 


    }, []);

    // #region Component 
    return (
    <nav>

        <div className="navigation">
            <Logo />

           {/*
            <div className="directions">
                <div
                style={{ cursor: "pointer" }}
                onClick={ () => 
                {
                    navigate(-1); 
                }}
                className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 19L8.5 12L15.5 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>



                <div
                style={{ cursor: "pointer" }}
                onClick={ () => 
                {
                    navigate(1); 
                }}
                className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 5L15.5 12L8.5 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
            </div>

             <Textfield
                type={ textfieldType.search }
                placeholder={ `Search ...` }
                onTextfieldCommit={ (value: string) => 
                {
                    navigate(`/search/${ value }`);

                }}
            />
            */}


        </div>

        <div className="links">

            <a target={ "_blank" } href="https://www.linkedin.com/in/carlko/" className="icon">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z"/>
            </svg>
            </a>

            <a target={ "_blank" } href="https://github.com/ckomondi" className="icon">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z"/>
            <path d="M9.16085 35.1623C9.10809 35.2838 8.92085 35.3197 8.75027 35.2366C8.57652 35.1571 8.47893 34.9921 8.53526 34.8706C8.58683 34.746 8.77447 34.7117 8.94782 34.7944C9.12197 34.8743 9.22115 35.0409 9.16085 35.1623Z"/>
            <path d="M10.131 36.263C10.0168 36.3707 9.79346 36.3207 9.64192 36.1504C9.48523 35.9806 9.45587 35.7534 9.57171 35.6441C9.68953 35.5363 9.90612 35.5868 10.0632 35.7566C10.2199 35.9285 10.2505 36.1541 10.131 36.263Z"/>
            <path d="M11.0757 37.6662C10.929 37.7699 10.689 37.6726 10.5406 37.456C10.3938 37.2393 10.3938 36.9795 10.5438 36.8754C10.6925 36.7713 10.929 36.8649 11.0793 37.0799C11.2257 37.2998 11.2257 37.5601 11.0757 37.6662Z"/>
            <path d="M12.3698 39.0219C12.2385 39.1692 11.9588 39.1297 11.7541 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0322 38.2001 12.2385 38.3994C12.4463 38.5955 12.5098 38.8763 12.3698 39.0219Z"/>
            <path d="M14.1549 39.8091C14.097 40 13.8276 40.0867 13.5563 40.0056C13.2853 39.9221 13.108 39.6986 13.1628 39.5057C13.2191 39.3137 13.4896 39.2233 13.763 39.31C14.0335 39.3932 14.2112 39.6151 14.1549 39.8091Z"/>
            <path d="M16.1154 39.9551C16.1221 40.156 15.892 40.3227 15.6072 40.3259C15.3208 40.3327 15.0891 40.1701 15.0859 39.9724C15.0859 39.7695 15.3109 39.6045 15.5973 39.5996C15.8821 39.594 16.1154 39.7554 16.1154 39.9551Z"/>
            <path d="M17.9396 39.6392C17.9737 39.8353 17.7757 40.0366 17.4929 40.0899C17.2148 40.1419 16.9574 40.0209 16.9221 39.8264C16.8876 39.6255 17.0891 39.4241 17.3668 39.3721C17.65 39.3221 17.9035 39.4399 17.9396 39.6392Z"/>
            </svg>
            </a>
        
        </div>  
    </nav>
    )
    // #endregion




}





// #region logo
function Logo()
{
    return (

    <Link to={ `/` } id="Logo" className="icon" children=
    {
    <>
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 23.9996C0 10.7451 10.7454 0 23.9999 0C37.2549 0 48 10.7451 48 23.9996C48 37.2555 37.2549 48 23.9999 48C10.7454 48 0 37.2555 0 23.9996ZM10.3146 18.5011C17.6998 16.2597 30.4604 16.6821 38.1966 21.2764C39.2607 21.9098 40.6395 21.5581 41.2723 20.4914C41.9045 19.4265 41.5549 18.0488 40.4879 17.4155C31.5819 12.1287 17.4891 11.6318 9.01123 14.2051C7.82446 14.5656 7.15585 15.8189 7.51523 17.0056C7.87433 18.1915 9.12845 18.861 10.3146 18.5011ZM35.3694 28.6973C36.249 29.2381 37.4005 28.9619 37.9433 28.0812C38.4841 27.2025 38.2072 26.0504 37.3277 25.5088C29.9199 20.9563 19.0837 19.6752 10.3671 22.3204C9.37921 22.6214 8.82122 23.6645 9.11927 24.6539C9.41991 25.6417 10.4651 26.1994 11.4544 25.9005C19.0848 23.5843 28.92 24.733 35.3694 28.6973ZM35.0066 34.6163C34.5753 35.3236 33.6545 35.5451 32.9498 35.1141C27.314 31.6696 20.2203 30.8918 11.8662 32.7999C11.0612 32.9844 10.2588 32.48 10.0753 31.6753C9.89077 30.8703 10.3935 30.0678 11.2002 29.8841C20.3424 27.7943 28.1843 28.6936 34.5102 32.5591C35.2155 32.9899 35.4376 33.9113 35.0066 34.6163Z"/>
        </svg>

        <p>Spotify</p>
    </>
    }/>

    )
}
// #endregion

export { NavBar }





