import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
	 <section>
      <h1>Oh Sorry, page not found</h1>
      <img src={require('../images/notFound.jpg')} alt="page not found" width={600} />
      <p>
        <Link to="/">Wallet</Link>
      </p>
	 </section>
  );
};

export default NotFoundPage;
