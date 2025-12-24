import "./HeaderComponent.css"

export default function HeaderPlaceholder() {
    return (
        <div className="col-8">
            <div className="p-0 rounded placeholder-glow" aria-hidden="true">
                <h1 className="m-0">
                    {/* Line 1: Thick bar for main title */}
                    <span className="placeholder header-placeholder-text rounded w-100 mb-3"></span>
                    
                    {/* Line 2: Thick bar for subtitle, adjusted width */}
                    <span className="placeholder header-placeholder-text rounded w-60"></span>
                </h1>
            </div>
        </div>
    );
}