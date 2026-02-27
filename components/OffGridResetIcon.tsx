// Custom icon: circular reset arrow (reset) + mountain peaks (off-grid)
// Styled to match Lucide icon conventions (24x24, stroke-based, round caps)

interface OffGridResetIconProps {
    className?: string;
    strokeWidth?: number;
}

export function OffGridResetIcon({ className, strokeWidth = 1.5 }: OffGridResetIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {/* Circular counterclockwise arc — "Reset" */}
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            {/* Arrowhead pointing counterclockwise */}
            <polyline points="3 3 3 8 8 8" />
            {/* Mountain peaks in centre — "Off-Grid / Wilderness" */}
            <polyline points="8 17 12 10 16 17" />
        </svg>
    );
}
