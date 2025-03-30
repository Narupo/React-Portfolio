import PropTypes from 'prop-types';
import '../styles/PageTitle.css';

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };

function PageTitle({ title }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;
