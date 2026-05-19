function ProjectStatusTag({ status }) {
    const STATUS_STYLES = {
        active: {
            bg: "rgba(43, 127, 255, 0.15)",
            color: "#91c5ff",
            dot: "#2b7fff",
            label: "Open",
        },
        closed: {
            bg: "rgba(255, 100, 103, 0.15)",
            color: "#ff6467",
            dot: "#ff6467",
            label: "Closed",
        },
    };

    const s = STATUS_STYLES[status?.toLowerCase()] ?? STATUS_STYLES["active"];

    return (
        <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium"
            style={{ background: s.bg, color: s.color }}
        >
            <span
                className="w-1.5 h-1.5 animate-ping rounded-full"
                style={{ background: s.dot }}
            />
            {s.label}
        </span>
    );
}

export default ProjectStatusTag;
