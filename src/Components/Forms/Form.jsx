const Form = ({ changeBox }) => {
    return (
        <div>
            <div>
                <input type="checkbox" value="box1" className="text-white mx-2" onChange={(e) => changeBox(e)} />
                <label htmlFor="box1" >Box 1</label>
            </div>
            <div>
                <input type="checkbox" value="box2" className="text-white mx-2" onChange={(e) => changeBox(e)} />
                <label htmlFor="box2" >Box 2</label>
            </div>
            <div>
                <input type="checkbox" value="box3" className="text-white mx-2" onChange={(e) => changeBox(e)} />
                <label htmlFor="box3" >Box 3</label>
            </div>
        </div >
    );
};

export default Form;




