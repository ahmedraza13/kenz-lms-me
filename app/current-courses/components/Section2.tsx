const SearchAndDropdowns = () => {
    return (
        <>
            <div className="search-and-dropdowns d-flex flex-row gap-3 justify-content-center align-items-center mt-5">
                <input
                    type="text"
                    className="form-control "
                    placeholder="Search..."
                    style={{ width: '400px' }}
                />
                <select className="form-select " style={{ width: '200px' }}>
                    <option value="">Select Option 1</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <select className="form-select" style={{ width: '200px' }}>
                    <option value="">Select Option 2</option>
                    <option value="optionA">Option A</option>
                    <option value="optionB">Option B</option>
                    <option value="optionC">Option C</option>
                </select>
            </div>
        </>
    );
}

export default SearchAndDropdowns;
