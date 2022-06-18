import funnel from '../../assets/shape.svg';
import cart from '../../assets/cart.svg';
import touch from '../../assets/touch.svg';
import Nav from '../../components/nav/nav';
import Bar from '../../components/stats/bar';
import dataa from '../../data/index.json';

const Lasthour = () => {

    const {errors_last_hour, data } = dataa;

    const {timeout_last_hour, zeroes_last_hour, avg_price_last_hour, str_last_hour, ctr_last_hour, bookings_previous_last_hour, searches_previous_last_hour, clicks_previous_last_hour, clicks_current_last_hour, bookings_current_last_hour } = data[0];

    return (<div className="pagee">


        <Nav />

         <Bar data={errors_last_hour} timeout={'0'} zeros={'0'} errors={'0'}/>

        <div className="item" style={{
            marginBottom: "3pc"
        }}>
            <div className="subitem">
                <div className="imgdot">
                    <div className="circular green">
                        <img src={funnel} alt="Searches" style={{
                            maxWidth:'100%'
                        }} />
                    </div>

                    <div className="line"></div>
                </div>

                <div className="infoDesc">

                        <div className="infoHeader">
                            <span style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#4A4A4A"
                            }}>Searches</span>
                            <div style={{
                                borderRadius:"6rem",
                                color: "#fff",
                                backgroundColor: "#8BC34A"
                            }}>+5%</div>
                        </div>

                        <div className="infoE">
                            <span style={{
                                color: "#4A4A4A",
                                fontSize: 20
                            }}>{clicks_current_last_hour}</span>
                            <span style={{
                                color:"#4A4A4A"
                            }}>Last Hour</span>
                        </div>

                         <div className="infoE">
                            <span style={{
                                color: "#A0B0B9",
                                fontSize: 20
                            }}>{clicks_previous_last_hour}</span>
                            <span style={{
                                color:"#A0B0B9"
                            }}>Previous</span>
                        </div>
                </div>
            </div>  

            <div className="subitem">
                    <div style={{
                        color: "#4A4A4A",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "5px"
                    }}>Mobile traffic: 100%</div> 
                    <div style={{
                        color: "#4A4A4A",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "13px"
                    }}>Web traffic: 100%</div>

                    <div style={{
                        color: "#A0B0B9",
                        fontSize: "12px",
                        marginBottom: "5px"
                    }}>You get 100% traffic on mobile and desktop devices.</div>
                    <div style={{
                        color: "#A0B0B9",
                        fontSize: "12px"
                    }}>Help: <a href="/">Searches</a>, <a href="/">Pessimisation</a></div>
            </div>
        </div>


        <div className="item" style={{
            marginBottom: "3pc"
        }}>
            <div className="subitem">
                <div className="imgdot">
                    <div className="circular red">
                        <img src={touch} alt="Searches" style={{
                            maxWidth:'100%'
                        }} />
                    </div>

                    <div className="line"></div>
                </div>

                <div className="infoDesc">

                        <div className="infoHeader">
                            <span style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#FF6A67"
                            }}>Clicks</span>
                            <div style={{
                                borderRadius:"6rem",
                                color: "#fff",
                                backgroundColor: "#FF6A67"
                            }}>-13%</div>
                        </div>

                        <div className="infoE">
                            <span style={{
                                color: "#4A4A4A",
                                fontSize: 20
                            }}>380</span>
                            <span style={{
                                color:"#4A4A4A"
                            }}>Yesterday</span>
                        </div>

                         <div className="infoE">
                            <span style={{
                                color: "#A0B0B9",
                                fontSize: 20
                            }}>200</span>
                            <span style={{
                                color:"#A0B0B9"
                            }}>Last Friday</span>
                        </div>
                </div>
            </div>  

            <div className="subitem">
                    <div style={{
                        color: "#FF6A67",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "5px"
                    }}>CTR: 0.04%</div> 
            

                    <div style={{
                        color: "#A0B0B9",
                        fontSize: "12px",
                        marginBottom: "5px"
                    }}>Conversion from searches  to clicks on all devices.</div>
                    <div style={{
                        color: "#A0B0B9",
                        fontSize: "12px"
                    }}>Help: <a href="/">CTR</a>, <a href="/">clicks</a></div>
            </div>
        </div>


        <div className="item" style={{
            marginBottom: "3pc"
        }}>
            <div className="subitem">
                <div className="imgdot">
                    <div className="circular green">
                        <img src={cart} alt="Searches" style={{
                            maxWidth:'100%'
                        }} />
                    </div>

                    <div className="line"></div>
                </div>

                <div className="infoDesc">

                        <div className="infoHeader">
                            <span style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#4A4A4A"
                            }}>Sales</span>
                           
                        </div>

                        <div className="infoE">
                            <span style={{
                                color: "#4A4A4A",
                                fontSize: 20
                            }}>29</span>
                            <span style={{
                                color:"#4A4A4A"
                            }}>Yesterday</span>
                        </div>

                         <div className="infoE">
                            <span style={{
                                color: "#A0B0B9",
                                fontSize: 20
                            }}>27</span>
                            <span style={{
                                color:"#A0B0B9"
                            }}>Last Friday</span>
                        </div>
                </div>
            </div>  

            <div className="subitem">
                    <div style={{
                        color: "#4A4A4A",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "5px"
                    }}>STR: 6.2% Avg.</div> 
                    <div style={{
                        color: "#4A4A4A",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "13px"
                    }}>Check: 8 903₽</div>

                    <div style={{
                        color: "#A0B0B9",
                        fontSize: "12px",
                        marginBottom: "5px"
                    }}>Conversion from cliks  to bookings on all devices.</div>
                    <div style={{
                        color: "#A0B0B9",
                        fontSize: "12px"
                    }}>Help: <a href="/">STR</a>, <a href="/">Bookings</a>
                    <a href="/">Avg</a> <a href="/">Check</a></div>
            </div>
        </div>

    </div>)

}

export default Lasthour;