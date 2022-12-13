<template class="container ">
    <main class="bg-secondaryBGColor">
        <div class="container mx-auto">
            <!-- Navigation Part -->
            <nav class="relative container mx-auto p-10">
                <div class="flex item-center justify-between mx-auto">
                    <div class="pt-2">
                        <img src="images/logo.png" alt="" class="w-48 p-0 pl-6" />
                    </div>
                    <div class="hidden md:flex space-x-6 pt-5 self-baseline">
                        <NuxtLink to="/" class="hover:text-textColor">About</NuxtLink>
                        <NuxtLink to="/" class="hover:text-textColor">Features</NuxtLink>
                        <NuxtLink to="/" class="hover:text-textColor">Pricing</NuxtLink>
                        <NuxtLink to="/" class="hover:text-textColor">Testimonials</NuxtLink>
                        <NuxtLink to="/" class="hover:text-textColor">Help</NuxtLink>
                    </div>
                    <div class="hidden md:block p-3 px-6">
                        <NuxtLink to="/" class="px-3 pt-2 self-baseline">Sign In</NuxtLink> 
                        <NuxtLink to="/" class="px-4 p-3 text-black bg-white rounded-full self-baseline">Become a Zoommer</NuxtLink> 
                    </div>
                </div>
            </nav>
        </div>
        <div id="hero" class="md:pl-24 pr-0">
            <div class="container flex flex-col-reverse md:flex-row md:pl-14 mt-10 space-y-0 md:space-y-0 w-full">
                <!-- Text  -->
                <div class="flex flex-col mb-32 space-y-12 max-sm:px-4 md:w-1/2">
                    <h1 class="max-w-xl text-4xl font-bold text-center md:text-5xl md:text-left max-sm:max-w-lg">
                        Send Percel <span class="text-textColor">Nationwide</span>
                    </h1>
                    <p class="max-w-lg">
                        <span class="font-bold">No more stress!</span>   
                        Our Zoomers pickup from your doorstep and deliver to the Receiver’s doorstep in no time. Enter the details below to get started;
                    </p>
                    <div class="max-w-md bg-primaryColor py-10 px-5">
                        <form class="form">

                            <div class="relative">
                                <input type="text" class="form-input w-full px-12 py-3 rounded-full mb-3 text-sm font-bold" placeholder="Enter pickup address">
                                <Icon name="uil:location-point" class="absolute left-0 top-0 mt-4 ml-5" />
                            </div>
                            <div class="relative">
                                <input type="text" class="form-input w-full px-12 py-3 rounded-full mb-3 text-sm font-bold" placeholder="Enter dropoff address">
                                <Icon name="uil:location-point" class="absolute left-0 top-0 mt-4 ml-5" />
                            </div>
                            <button type="submit" class="px-6 p-2 text-white bg-buttonPrimaryColor rounded-full self-baseline float-right">Next</button>
                        </form>
                    </div>
                </div>
                <!-- Images -->
                <div class="md:w-1/2 p-0 pt-8">
                    <img src="images/hero_banna.png" alt="" class="w-full m-0 mt-14" />
                </div>
            </div>
        </div>
    </main>
    <main class="container mx-auto m-0 py-12" id="features">
        <div class="container mx-auto md:pl-10">
            <div class="container">
                <h1 class="text-center text-4xl">Service Categories</h1>
            </div>
            <div class="container flex flex-col px-8 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div class="md:w-1/2">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="images/worker_a.png" alt="" />
                        <div class="px-6 pt-4 pb-2">
                            <h1 class="inline-block px-3 py-1 text-lg font-semi-bold">
                                Intra-city Delivery
                            </h1>
                            <p class="inline-block px-3 py-1 text-sm font-semi-bold">
                                Send and recieve percel within a city
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:1/2">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="images/worker_b.png" alt="" />
                        <div class="px-6 pt-4 pb-2">
                            <h1 class="inline-block px-3 py-1 text-lg font-semi-bold">
                                Inter-city Delivery
                            </h1>
                            <p class="inline-block px-3 py-1 text-sm font-semi-bold">
                                Send and recieve percel from other city
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    <main class="bg-secondaryBGColor">
        <div class="container mx-auto m-0 px-2 py-12">
            <div class="container flex flex-col px-16 mx-auto mt-10 space-y-12 md:space-y-0 md:space-x-4 md:flex-row">
                <div class="md:w-2/4">
                    <h1 class="font-bold text-4xl max-w-lg mb-2">The Convenient way to make delivery at low cost</h1>
                    <p class="max-w-md mb-4">
                        From finding the right courier for every location, 
                        running around with pacel and to  paying too much for deliver... 
                        Zoommit solves all these problems and more!
                    </p>
                    <ul>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">Fastest delivery System</span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">Verified and Equipped Couriers</span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">You set your Price </span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4"> Payments</span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">24/7 support</span></li>
                    </ul>
                </div>
                <div class="md:w-2/4">
                    <img src="images/group_a.png" alt="" class="w-full" />
                </div>
            </div>
        </div>
    </main>
    <main class="bg-secondaryBGColor">
        <div class="container mx-auto m-0 px-2 py-12">
            <div class="container flex flex-col px-16 mx-auto mt-10 space-y-12 md:space-y-0 md:space-x-4 md:flex-row">
                <div class="md:w-2/4">
                    <img src="images/group_b.png" alt="" class="w-full" />
                </div>
                <div class="md:w-2/4">
                    <h1 class="font-bold text-4xl max-w-lg mb-2">Get your Parcel delivered in few simple steps</h1>
                    <p class="max-w-md mb-4">
                        Your parcel is always on the move with our dedicated couriers. 
                        No delay, no warehousing of  bags/pacel.
                    </p>
                    <ul>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">Fastest delivery System</span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">Verified and Equipped Couriers</span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">You set your Price </span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4"> Payments</span></li>
                        <li class="mb-5"><Icon name="uil:check-circle" /><span class="pl-4">24/7 support</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    <main>
        <div class="container mx-auto px-2 m-0 py-12">
            <div class="container flex flex-col px-16 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div class="md:w-1/2">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <img class="w-full h-auto" src="images/group_c.png" alt="" />
                        <div class="px-6 pt-4 pb-2">
                            <h1 class="text-center px-3 py-1 text-lg font-bold">
                                Become a Machant
                            </h1>
                            <p class="text-center px-3 py-1 text-sm">
                                Grow your business, offer natiowide delivery—Make it stress-free!
                            </p>
                            <p class="text-center px-3 py-1 text-sm font-bold text-primaryColor">
                                Get started
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:1/2">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full h-auto my-7" src="images/group_d.png" alt="" />
                        <div class="px-6 pt-4 pb-2">
                            <h1 class="text-center px-3 py-1 text-lg font-bold">
                                Become a Zoommer
                            </h1>
                            <p class="text-center px-3 py-1 text-sm">
                                As a delivery driver or rider, you'll make reliable money—working anytime, anywhere.                            
                            </p>
                            <p class="text-center px-3 py-1 text-sm font-bold text-primaryColor">
                                Start earning
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main>
        <div class="container mx-auto px-2 m-0 py-12">
            <div class="text-center">
                <h1 class="font-bold text-4xl">Trusted by Thousands of Happy Customers</h1>
                <p class="text-sm">These are  feedbacks from our users who have enjoined using our platform;</p>
            </div>
            <div class="container flex flex-col px-8 mx-auto mt-10 space-y-12 md:space-y-0 jsutify-between md:flex-row">
                <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto py-3 px-3 bg-secondaryBGColor h-44">
                    <div class="flex flex-row space-x-1 mx-auto mb-2 py-3">
                        <div class="basis-1/4">
                            <img src="images/testimonial_a.png" alt="" />
                        </div>
                        <div class="basis-2/4">
                            <p class="text-md font-bold">Oluji Tomothy</p>
                            <p class="text-sm">CEO, Gadget palace</p>
                        </div>
                        <div class="basis-1/4">
                            <span class="text-sm self-baseline">5.0 <span class="ml-1"><Icon name="uil:star" /></span></span>
                        </div>
                    </div>
                    <div class="text-sm">
                        <p class="text-sm">
                            “Wow... I am very happy to use Zoommit, 
                            it turned out to be faster than my expectations 
                            and so far there have been no more 
                            problems delivering to my customers
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto py-3 px-3 bg-secondaryBGColor  h-44">
                    <div class="flex flex-row space-x-1 mx-auto mb-2 py-3">
                        <div class="basis-1/4">
                            <img src="images/testimonial_a.png" alt="" />
                        </div>
                        <div class="basis-2/4">
                            <p class="text-md font-bold">Yemisi Christy</p>
                            <p class="text-sm">MD: chanxi fashion</p>
                        </div>
                        <div class="basis-1/4">
                            <span class="text-sm self-baseline">5.0 <span class="ml-1"><Icon name="uil:star" /></span></span>
                        </div>
                    </div>
                    <div class="text-sm">
                        <p class="text-sm">
                            “I like Zoommit because there is always a Courier well used to where I’m sending the parcel”.
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto py-3 px-3 bg-secondaryBGColor h-44">
                    <div class="flex flex-row space-x-1 mx-auto mb-2 py-3">
                        <div class="basis-1/4">
                            <img src="images/testimonial_a.png" alt="" />
                        </div>
                        <div class="basis-2/4">
                            <p class="text-md font-bold">Friday Emeka</p>
                            <p class="text-sm">CEO Crystal Telecom</p>
                        </div>
                        <div class="basis-1/4">
                            <span class="text-sm self-baseline">5.0 <span class="ml-1"><Icon name="uil:star" /></span></span>
                        </div>
                    </div>
                    <div class="text-sm">
                        <p class="text-sm">
                            “This is supper useful for my business that currently requires home deliveries to all my customers”.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main class="bg-black">
        <div class="container mx-auto px-2 m-0 py-12">
            <div class="container px-16 mx-auto mt-10 space-y-12">
                <h1 class="text-4xl font-bold text-secondaryTextColor">Zoommit.com Guides</h1>
            </div>
            <div class="container flex flex-col px-14 mx-auto mt-10 mb-20 space-y-12 md:space-y-0 md:flex-row justify-between">
                <div class="md:w-1/3">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="images/youtubevideo.png" alt="" />
                        <div class="pt-4 pb-2 text-secondaryTextColor">
                            <h1 class="inline-block px-3 py-1 text-lg font-semi-bold">
                                Zoommit.com Guides
                            </h1>
                            <p class="inline-block px-3 py-1 text-sm font-semi-bold">
                                Zoommit is a private virtual network that has unique features and has high security.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:1/3">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="images/youtubevideo.png" alt="" />
                        <div class="pt-4 pb-2 text-secondaryTextColor">
                            <h1 class="inline-block px-3 py-1 text-lg font-semi-bold">
                                Zoommit.com Guides
                            </h1>
                            <p class="inline-block px-3 py-1 text-sm font-semi-bold">
                                Zoommit is a private virtual network that has unique features and has high security.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:1/3">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="images/youtubevideo.png" alt="" />
                        <div class="pt-4 pb-2 text-secondaryTextColor">
                            <h1 class="inline-block px-3 py-1 text-lg font-semi-bold">
                                Zoommit.com Guides
                            </h1>
                            <p class="inline-block px-3 py-1 text-sm font-semi-bold">
                                Zoommit is a private virtual network that has unique features and has high security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main class="bg-footerBG">
        <div class="absolute max-w-7xl right-56 -mt-28 mb-10 rounded overflow-hidden shadow-lg mx-auto">
            <img class="w-full" src="images/footerbanner.png" alt="" />
        </div>
        <div class="container mx-auto m-0 px-16 py-16">
            <div class="container flex flex-col justify-between px-16 py-12 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div class="w-1/3 flex flex-col px-4">
                    <div class="w-full p-0 mb-4">
                        <img src="images/footerlogo.png" alt="" />
                    </div>
                    <p class="text-xs mb-4 px-2">
                        Zoommit is a logistic network company, with  large number of indepent couriers/zoommers.
                    </p>
                    <div class="flex flex-row px-2">
                        <NuxtLink to="/" class="basis-1/3"><img src="images/facebook.png" alt="" /></NuxtLink>
                    <NuxtLink to="/" class="basis-1/3"><img src="images/twitter.png" alt="" /></NuxtLink>
                    <NuxtLink to="/" class="basis-1/3"><img src="images/instagram.png" alt="" /></NuxtLink>
                    </div>
                </div>
                <div class="w-2/3 flex flex-row">
                    <div class="basis-1/3">
                        <p class="text-sm font-bold mb-5">Products</p>
                        <ul class="text-sx">
                            <li class="mb-2">
                                <NuxtLink to="/" class="text-sx">Website app for users</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Mobile App for Zoommers</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Integration API</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="basis-1/3">
                        <p class="text-sm font-bold mb-5">Engage</p>
                        <ul class="text-sx">
                            <li class="mb-2">
                                <NuxtLink to="/" class="text-sx">Send Parcel now</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">FAQ</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Tutorials</NuxtLink>
                            </li>
                            <li class="mb-2">
                                <NuxtLink to="/" class="text-sx">Privacy Policy</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Terms of Service</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Investor Relations</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="basis-1/3">
                        <p class="text-sm font-bold mb-5">Business</p>
                        <ul class="text-sx">
                            <li class="mb-2">
                                <NuxtLink to="/" class="text-sx">Affiliate</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Become Zoommer</NuxtLink>
                            </li>
                            <li class="text-sx mb-2">
                                <NuxtLink to="/"  class="text-sx">Partnerships</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    definePageMeta({
        layout: false
    });
</script>