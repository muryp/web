import html from '@/helper/html'

interface args{
  text:string
  bg?:string
}
export default function MainBtn({text,bg='bg-blue-700'}:args){
  return html`<button type="button"
        class="text-white ${bg} hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${text}</button>`
}
