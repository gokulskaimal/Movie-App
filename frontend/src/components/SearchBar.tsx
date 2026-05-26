interface Props{
    value : string;
    onChange : (value :string) => void;
}

function SearchBar({value , onChange} : Props){
    return (
        <div style={{marginBottom:'20px'}}>
            <input type="text" placeholder="Search for movies" value = {value} onChange = {(e) => onChange(e.target.value)} style ={{width : "100%" , padding : "14px" , fontSize: "16px", borderRadius : "8px",border : '1px solid #ccc'}}/>
        </div>
    )
}

export default SearchBar