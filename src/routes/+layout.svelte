<script>
    import "../app.css";
</script>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <h1>LOGO</h1>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li><a href="/" class="text-amber-700 p-6 rounded-md text-xl shadow-lg">Home</a></li>
                <li><a href="/buy" class="text-amber-700 p-6 rounded-md text-xl shadow-lg">Purchase</a></li>
                <li><a href="/blog" class="text-amber-700 p-6 rounded-md text-xl shadow-lg">Blog</a></li>
                <li><a href="/admin" class="text-amber-700 p-6 rounded-md text-xl shadow-lg">Admin Panel</a></li>
            </ul>
        </div>
        
    </div>
</nav>
<div class="pb-8" />

<slot />