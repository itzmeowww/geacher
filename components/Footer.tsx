import { BsGithub } from "react-icons/bs";

function Footer() {
    return (
        <footer className="text-white flex h-24 mt-4 w-full items-center justify-center border-t">
            <div className="flex flex-row gap-2">
                <div>Source code is available on</div>
                <a href="https://github.com/itzmeowww/geacher" target="_blank" className="flex flex-row justify-center items-center gap-2 underline"> Github <span> <BsGithub /></span></a>
            </div>

        </footer>
    );
}

export default Footer;