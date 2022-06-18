const Bar = ({timeout, zeros, data, errors}: { timeout:string, zeros:string, data:any[], errors:string }) => {

    const color = ['#FFCC00', '#5856D5', '#2196F3', '#A0B0B9'];

    let total = 0
    data.forEach((e) => {
        total += e.count;
    })
    const calCulate = (value:number, ): (string | number) => {
            return ((value/ total) * 100)+'%';
    }

    return (
    <div style={{
        marginBottom: "3pc"
    }}>
        <div className="headline">

            <div className="item">
                    <div style={{
                        height:9,
                        marginTop: 6,
                        width:9,
                        borderRadius:'50%',
                        backgroundColor:'#8BC34A',
                        marginRight:'6px'
                    }}></div>
                <div>
                    <div style={{
                        fontSize:16,
                        color:"#4A4A4A"
                    }}>Errors: {errors}</div>
                    <div style={{
                        color:"#A0B0B9",
                        fontSize:14
                    }}>Average: 0,11%</div>
                </div>
            </div>

            <div className="item">
                    <div style={{
                        height:9,
                        marginTop: 6,
                        width:9,
                        borderRadius:'50%',
                        backgroundColor:'#8BC34A',
                        marginRight:'6px'
                    }}></div>
                <div>
                    <div style={{
                        fontSize:16,
                        color:"#4A4A4A"
                    }}>Zeroes:{zeros}</div>
                    <div style={{
                        color:"#A0B0B9",
                        fontSize:14
                    }}>Average: 0,11%</div>
                </div>
            </div>


            <div className="item">
                    <div style={{
                        height:9,
                        marginTop: 6,
                        width:9,
                        borderRadius:'50%',
                        backgroundColor:'#8BC34A',
                        marginRight:'6px'
                    }}></div>
                <div>
                    <div style={{
                        fontSize:16,
                        color:"#4A4A4A"
                    }}>Timeout: {timeout} </div>
                    <div style={{
                        color:"#A0B0B9",
                        fontSize:14
                    }}>Average: 0,11%</div>
                </div>
            </div>


        </div>

        <div className="bar">

                {data.map((e, i) => (
 
             <div key={i} style={{
                width: calCulate(e.count),
                backgroundColor: color[i]
            }}></div>
                ))}
            
    </div>

          <div className="statNumber">

                {data.map((e, i) => (
                    <div key={i} className="item">
                    <div style={{
                        width:12,
                        height:12,
                        backgroundColor: color[i] 
                    }}></div>

                    <span>{e.code ? `Error ${e.code}` : 'other'}: {e.count}</span>
                </div>
                ))}

        
            </div>

    </div>)
}

export default Bar;