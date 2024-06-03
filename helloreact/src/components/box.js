import React, { useState } from 'react';

const Box = () => {


    const [block, setBlock] = useState([
        [0, 0, 0],
        [0, 0, 0]
    ]);


    const [count, setCount] = useState(0);
  

    const updateColor = (rowIndex , colIndex) => {
        let blockTemp = block;

        blockTemp[rowIndex][colIndex] = 1;

        setBlock(blockTemp);
        setCount(count + 1);
    }
    


    const temp1 = {
                    border: '2px solid blue',
                    width: '33.33%',
                    height: '33.33%',
                    backgroundColor: 'white',
                    textAlign: 'center' 
    }
    
     const temp2 = {
                    border: '2px solid blue',
                    width: '33.33%',
                    height: '33.33%',
                    backgroundColor: 'orange',
                    textAlign: 'center' 
    }
    
     const temp3 = {
                    border: '2px solid blue',
                    width: '33.33%',
                    height: '33.33%',
                    backgroundColor: 'pink',
                    textAlign: 'center' 
                }

    return (
        <>
            <table style={{ border: "3px solid blue", width: "30%", height: "30%" }}>
                <tbody>
                    {block.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <td
                                    key={`${rowIndex}-${colIndex}`}
                                    style={count === 6 ? temp2 : block[rowIndex][colIndex] ? temp3 : temp1}
                                    onClick={() => updateColor(rowIndex, colIndex)}
                                >
                                    {col}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Box;
