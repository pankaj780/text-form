import React from 'react'

function Alert(props) {
  return (
    props.alert && <div>
        <div className={`alert alert-${(props.alert)?props.alert.type:''} alert-dismissible fade show`} role="alert">
           <strong>{(props.alert)?props.alert.msg:null}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert
