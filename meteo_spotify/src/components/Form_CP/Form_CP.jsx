import React from 'react';


const Form_CP = ({value,checkSubmit,checkChange}) => {
    return (
      <form onSubmit={(event)=> checkSubmit(event)}>
        <label>
          CP :
          <input type="text" value={value} onChange={(event)=> checkChange(event)} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
export default Form_CP;
