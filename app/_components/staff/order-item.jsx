

export default function OrderItem() {
    return (
        <li className="list-row flex justify-between items-center cursor-pointer hover:bg-primary-content shadow-md">
            <div className="w-2/5 flex flex-col justify-center items-center gap-1">
                <img className="size-10 rounded-full" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                <div className="badge badge-success rounded-full text-white text-xs font-bold opacity-85 tabular-nums">09:00AM</div>
            </div>
            <div className="w-3/5 list-col-grow text-xs gap-1">
                <div className="font-semibold">Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60 line-clamp-1">2018 Toyota Camry</div>
                <div className="text-xs opacity-60 line-clamp-2" >issue: fdsalfdlsalfldlsafldslaflsalfdlslfkvjwioaiefowijfodasnvcozxf</div>
            </div>
        </li>
    )
}