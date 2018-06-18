import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

function DropDownQuestion(props) {
  let { question, options, handleSubmit, position } = props;
  return (
    <div className="card">
      <h3>{ question }</h3>

      <form className="question-form" onSubmit={(e) => {handleSubmit(position + 1, e)}}>
        <Field className="input input-form" name="businessType" component="select">
          { options.map((opt, i) => {
            return <option key={i}>{opt}</option>
          }) }      
        </Field>
        <button>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    position: state.position
  };
};

const connected = connect(mapStateToProps, null)(DropDownQuestion);

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false, 
  initialValues: { businessType: "Bar" },
  forceUnregisterOnUnmount: true
})(connected)
