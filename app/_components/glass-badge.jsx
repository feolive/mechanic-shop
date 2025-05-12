

export default function GlassBadge({ children, ...props }) {
    return (
        <div className="w-fit leading-1.5 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-neutral-content/10 hover:bg-white/20 transition-all ease-linear duration-300" {...props}>
            {children}
        </div>
    )
}