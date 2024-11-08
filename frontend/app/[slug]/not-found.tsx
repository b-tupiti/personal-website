import Link from "next/link";

function NotFound() {
    return (
    <div className="dark:bg-dark">
        <div className="max-w-[720px] m-auto">
            <div className="flex flex-col p-8 gap-y-4 items-center">
                <h2 className="dark:text-slate-400 text-slate-500 font-bold text-2xl">Oops, Sorry!</h2>
                <p className="dark:text-slate-300 text-slate-700 text-sm">Nothing to see here.</p>
                <Link 
                    className="mt-8 dark:text-slate-300 text-slate-600 font-bold dark:bg-[#0e2738] bg-[#e2e8f0] p-2 px-4 rounded"
                    href="/"
                    >
                        Go back
                </Link>
            </div>
        </div>
    </div>
    );
}

export default NotFound;