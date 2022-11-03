class SearchElement extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    get value() {
        return this.querySelector('#search-country').value;
    }

    render(){
        this.innerHTML = `
            <div class="px-7 py-3 rounded-md bg-white shadow-[0px_0px_13px_0px_rgba(0,0,0,0.15)] mb-10 dark:bg-dark-mode-element lg:mb-0 lg:w-[350px] xl:w-[430px]">
                <form class="flex gap-5 rounded-md" action="" method="">
                    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path class="dark:fill-white" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                    </svg>
                    <input id="search-country" class="block w-full focus:outline-none focus:font-nunito bg-transparent dark:placeholder:text-white dark:caret-white dark:text-white" type="search" placeholder="Search for a country..." autocomplete="off">
                </form>
            </div>
        `;
    }
}

customElements.define('search-element', SearchElement);