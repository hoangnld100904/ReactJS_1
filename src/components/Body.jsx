import React from "react";
export default function Body() {
    return (
        <div id="body">
            <div id="body-banner">
                <div className="py-5">
                    <div className="container px-lg-5">
                        <div className="p-4 p-lg-5 bg-light rounded-3">
                            <div className="m-4 m-lg-5">
                                <h1 className="display-5 " style={{ fontSize: '70px' }}>A warm welcome</h1>
                                <p className="fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad perferendis maiores non at distinctio sint tenetur nam laborum molestiae hic.</p>
                                <div className="btn btn-primary btn-lg">Call to action</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-item-list">
                <div className="pt-4">
                    <div className="container px-xl-5">
                        <div className="row gx-lg-5">
                            <div className="col-4 mb-5">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src="http://via.placeholder.com/500x325" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div  className="btn btn-primary">Go somewhere</div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-4 mb-5">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src="http://via.placeholder.com/500x325" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="btn btn-primary">Go somewhere</div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-4 mb-5">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src="http://via.placeholder.com/500x325" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="btn btn-primary">Go somewhere</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}