
import { Link } from 'react-router-dom';
import { Page } from "../../components";
import "./ErrorPage.style.scss";

function ErrorPage() {
  return (  
    <Page>
      <div className="404-page">
        <h1>404: Not Found</h1>
        <p style={{textAlign:"center"}}>
              <Link to="/">Home</Link>
            </p>
      </div>
    </Page>
  );
}

export default ErrorPage;

