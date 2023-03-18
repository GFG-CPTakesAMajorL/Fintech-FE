import styles from './StaticComponent.module.css'

const StaticComponent = ({ type }) => {
    if (type === 'help') {
        return (
            <div className={styles['box']}>
                <span>
                    <h3>How to use?</h3>
                    1. Upload a PDF file containing a data table.
                    <br />
                    2. Select the table by clicking the top left corner of a table and
                    dragging the mouse to the bottom right corner, until all of the data
                    is included in the shaded selection area.
                    <br />
                    3. A window will then appear containing your data. Inspect the data
                    to make sure it looks correct. If data is missing, you may have to
                    slightly expand your selection.
                    <br />
                    4. Click the Download button.
                    <br />
                    5. Now you can work with your data as text file or a spreadsheet
                    rather than a PDF!
                    <br />
                    (You can open the downloaded file in Microsoft Excel or the free
                    LibreOffice Calc)
                    <br />
                    <br />
                    <h4>
                        <strong>
                            Note: Ethan's Refinery only works on text-based PDFs, not scanned
                            documents.
                        </strong>
                    </h4>
                    <br />
                    <h3>Having trouble with Ethan's Refinery?</h3>
                    1. Ethan's Refinery said "Sorry, your PDF file is image-based" --
                    what does that mean? Your PDF does not have any embedded text. It
                    might have been scanned from paper. Ethan's Refinery is not able to
                    extract any data from image-based PDFs. You can try OCRing the PDF
                    with a tool like Adobe Acrobat Pro (paid), Tesseract, PDFSandwich
                    (Mac/Linux, free) or Lime OCR (Windows, free) and then trying
                    Ethan's Refinery again.
                    <br />
                    2. Some columns of my table are combined. What can I do? Ethan's
                    Refinery sometimes uses "streams" of whitespace to recreate your
                    table's structure. If headers span multiple columns, they're
                    probably causing a problem. Try excluding them from your selection
                    (or selecting them separately).
                    <br />
                    3. Some columns of my table are combined. And the headers aren't the
                    problem! What else can I do? Ethan's Refinery has two extraction
                    methods. It tries to guess which one is right for document, but it's
                    wrong sometimes. Try selecting the other (of "stream" and
                    "lattice"), on the left in extraction mode, to see if that fixes the
                    problem.
                    <br />
                    4. Ethan's Refinery helps, but my extracted data isn't in the layout
                    I want! How can I fix that? Ethan's Refinery tries to recreate the
                    table structure of the original document. You can think of Ethan's
                    Refinery as a data extraction tool rather than a data transformation
                    tool. If you want to clean and transform your exported CSV or TSV,
                    tools such as OpenRefine or a spreadsheet program might be a good
                    place to start.
                    <br />
                    5. Ethan's Refinery's taking too long! Sorry! Ethan's Refinery has
                    to do a lot of weird math to reconstruct your table. Ethan's
                    Refinery's command-line counterpart, Ethan's Refinery-extractor is
                    faster, but a little harder to use. You might give it a try.
                    <br />
                    6. I had some other problem! Sorry! You can report it to us here. Be
                    sure to include your PDF, either as a link or attached to the issue
                    -- or email it to one of the Ethan's Refinery creators.
                </span>
            </div>
        )
    }
    else if (type === 'about') {
        return (
            <div className={styles["box"]}>
                <h2>About Refinery</h2>
                <span>
                    Ethan's Refinery is a tool for liberating data tables trapped inside
                    PDF files.
                    <br />
                    Ethan's Refinery was created by journalists for journalists and
                    anyone else working with data locked away in PDFs. Ethan's Refinery
                    will always be free and open source.
                    <br />
                    If you’ve ever tried to do anything with data provided to you in
                    PDFs, you know how painful it is — there's no easy way to
                    copy-and-paste rows of data out of PDF files. Ethan's Refinery
                    allows you to extract that data into a CSV or Microsoft Excel
                    spreadsheet using a simple, easy-to-use interface. Ethan's Refinery
                    works on Mac, Windows and Linux.
                    <br />
                    <br /> Caveat: Ethan's Refinery only works on text-based PDFs, not
                    scanned documents. If you can click-and-drag to select text in your
                    table in a PDF viewer (even if the output is unorganized trash),
                    then your PDF is text-based and Ethan's Refinery should work.
                    <br />
                    <br /> Security Concerns? Ethan's Refinery is designed with security
                    in mind. Your PDF and the extracted data never touch the net -- when
                    you use Ethan's Refinery, as long as your browser's URL bar says
                    "localhost" or "127.0.0.1", all processing takes place on your local
                    machine. Ethan's Refinery does download a list of Ethan's Refinery
                    versions from our server to alert you if Ethan's Refinery has been
                    updated (and we use hits to that list to count how often Ethan's
                    Refinery is being used); it also downloads a few badges and assets
                    from the web.
                    <br />
                    <br />
                    <h3>Who Uses Ethan's Refinery ?</h3>
                    Ethan's Refinery is used to power investigative reporting at news
                    organizations of all sizes, including ProPublica, The Times of
                    London, Foreign Policy, La Nación (Argentina) and the St. Paul (MN)
                    Pioneer Press.
                    <br />
                    <br /> Grassroots organizations like SchoolCuts.org rely on Ethan's
                    Refinery to turn clunky documents into human-friendly public
                    resources. And researchers of all kinds use Ethan's Refinery to turn
                    PDF reports into Excel spreadsheets, CSVs, and JSON files for use in
                    analysis and database applications.
                    <br />
                    <br />
                    <h3>Credits</h3>
                    Ethan's Refinery was created by Manuel Aristarán, Mike Tigas and
                    Jeremy B. Merrill with the support of ProPublica, La Nación DATA,
                    Knight-Mozilla OpenNews, The New York Times, Northwestern University
                    Knight Lab, The Knight Foundation, and The Shuttleworth Foundation.
                    Ethan's Refinery was designed by Jason Das.
                </span>
            </div>
        )
    }
}

export default StaticComponent