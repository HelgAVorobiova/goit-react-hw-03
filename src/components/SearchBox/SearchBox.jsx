export default function SearchBox({ value, onChange }) {
    return (
        <label>
            Find contacts by name
            <input type="text" value={value}
            onChange={ (e) =>onChange(e.target.value)} />
        </label>
        
    )
    
}