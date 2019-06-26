import React, { Component } from 'react';

export class Widget extends Component {
    render() {
        return (
            <div className="container rounded shadow-lg ">
                <img src="http://blog.livingactor.com/wp-content/uploads/Rebecca_RH.png" class="rounded float-right" alt="..."></img>

                <div className="card">
                    <h3 className="card-title">S.I.A</h3>
                    <p className="card-text">Your virtual banking <b />assistance from SBI</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <input className="name m-2" type="text" />
                    <div class="form-check m-2">
                        <input type="checkbox" className="form-check-input " id="id1"></input>
                        <label for="id1" className="form-check-label">I agree terms and conditions <a href="#">more.</a></label>
                    </div>
                    <button type="button" class="btn btn-primary m-2">Get started</button>
                    <button type="button" class="btn btn-light text-primary m-2">Skip</button>

                </div>

            </div>
        )
    }
}

export default Widget
