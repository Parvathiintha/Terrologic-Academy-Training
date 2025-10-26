const ItemList =()=>{
    const items=[
        {id:1, name:'A'},
        {id:2, name:"B"},
        {id:3, name:'C'}
    ];

return (
    <ul>
        {items.map(val=>(
            <li key={val.id}>
                {val.name}
            </li>
        ))}
    </ul>
);
}
export default ItemList
