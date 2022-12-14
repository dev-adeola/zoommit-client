<template>
    <main>
      <div class="flex flex-row">
        <div class="basis-1/6 bg-dashboardAside border-r-8 border-textColor flex flex-col p-0 m-0 max-sm:hidden">
          <div class="w-full">
            <img src="/images/logo_dashboard.png" class="w-28 py-6 mb-4 mx-8"/>
          </div>
          <ul class="mb-6">
            <li class="bg-navlinkTrans border-l-8 border-textColor py-6 px-2">
              <NuxtLink to="/" class="text-white font-bold"><span class="text-white text-3xl mr-5"><Icon name="uil:home" /></span><span class="text-xl m-0 self-baseline">Home</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans py-6 px-2">
              <NuxtLink to="/" class="text-white font-bold "><span  class="text-white text-3xl mr-5"><Icon name="uil:shopping-cart" /></span><span class="text-xl m-0 self-baseline">Deliveries</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans py-6 px-2">
              <NuxtLink to="/" class="text-white font-bold "><span  class="text-white text-3xl mr-5"><Icon name="uil:wallet" /></span><span class="text-xl m-0 self-baseline">Account Balance</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans py-6 px-2">
              <NuxtLink to="/" class="text-white font-bold "><span  class="text-white text-3xl mr-5"><Icon name="uil:cart" /></span><span class="text-xl m-0 self-baseline">Auto Fulfilment</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans py-6 px-2">
              <NuxtLink to="/" class="text-white font-bold "><span  class="text-white text-3xl mr-5"><Icon name="uil:setting" /></span><span class="text-xl m-0 self-baseline">Settings</span> </NuxtLink>
            </li>
          </ul>
          <div class="flex flex-row justify-evenly">
            <NuxtLink to="/" class="text-white text-xs inline"> About</NuxtLink>  | <NuxtLink to="/" class="text-white text-xs inline">Terms and Condition</NuxtLink> | <NuxtLink to="/" class="text-white text-xs inline">Legal</NuxtLink> | <NuxtLink to="/" class="text-white text-xs inline">Fees</NuxtLink>
          </div>
          
          <span class="text-secondaryTextColor mt-5 block">
            &copy; 2022 Zoommit
          </span>
        </div>


        <div class="basis-4/6 m-0 p-0">
          <div class="flex flex-col">
            <nav class="relative container mx-auto p-6 border-b-2 border-gray-100">
                <div class="flex flex-row item-center justify-between mx-auto">
                    <div class="hidden md:flex space-x-6 self-baseline">
                        <NuxtLink to="/" class="hover:text-textColor pr-4 border-r-2 border-gray-500"><Icon name="uil:home" class="text-2xl" /></NuxtLink>
                        <NuxtLink to="/" class="hover:text-textColor pr-4 border-r-2 border-gray-500">Home</NuxtLink>
                        <NuxtLink to="/" class="hover:text-textColor pr-4 inline-flex"> <img src="/images/users.png" alt="" class="w-8 p-0 " /> <span class="mx-4 px-2 border-l-2 border-gray-500">username </span></NuxtLink>
                    </div>
                    <div class="hidden md:flex space-x-6 self-baseline">
                        <NuxtLink to="/" class="hover:text-textColor"> Account Balance: $1500</NuxtLink>
                        <NuxtLink to="/" class="text-textColor">Top-Up</NuxtLink>
                    </div>
                </div>
            </nav>
            <div class="max-auto py-8 px-5">
                <h1 class="text-3xl font-bold mb-3 pl-5">Get Your Pacel Delivered</h1>
                <p class="text-sm mb-5 pl-5">Fast and effortless delivery made posible </p>
                <div class="rounded w-3/4 py-12 px-5 my-8 shadow-xl">
                  <form class="form">
                    <div class="mx-auto mb-5">
                      <label class="mb-2 text-sm">From</label>
                      <div class="relative">
                          <input type="text" class="form-input w-full px-12 py-2 rounded mb-3 text-sm font-bold" placeholder="">
                          <Icon name="uil:search" class="absolute left-0 top-0 mt-3 ml-5" />
                      </div>
                      <div class="justify-between max-w-md">
                        <span class="py-1 px-3 text-xs bg-gray-100 mx-4">HOME</span>
                        <span class="py-1 px-3 text-xs bg-gray-100 mx-4">OFFICE</span>
                        <span class="py-1 px-3 text-xs bg-gray-100 mx-4">WAREHOUSE</span>
                      </div>
                    </div>
                    
                    <div class="mx-auto mb-5">
                      <label class="mb-2 text-sm">To</label>
                      <div class="relative">
                          <input type="text" class="form-input w-full px-12 py-2 rounded mb-3 text-sm font-bold" placeholder="">
                          <Icon name="uil:search" class="absolute left-0 top-0 mt-3 ml-5" />
                      </div>
                    </div>
                    <button type="submit" class="px-6 p-2 text-white bg-buttonPrimaryColor rounded self-baseline float-right">Next</button>
                  </form>
                </div>
                <hr class="w-3/4 mx-auto mb-5" />
                <div class="mx-auto">
                  <p class="text-lg font-black mb-5">Active Deliveries</p>
                  <div class="flex flex-row space-x-4">
                      <div class="rounded max-w-2xl shadow-xl py-5 px-8">
                        <div class="flex flex-col space-y-3">
                          <div class="flex flex-row space-x-4">
                            <div class="py-3 px-5 bg-red-100 mr-2">
                              <span class="text-red-600 text-xl">5</span>
                            </div>
                            <div class="flex flex-col">
                              <div>
                                <span class="text-xs mb-1">
                                  Schedule for
                                </span>
                              </div>
                              <div>
                                <p class="text-md font-black">Pick Up</p>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-row">
                            <span class="text-xs mr-2">Your next pickup: </span><span class="text-sm font-black">15:00</span>
                          </div>
                        </div>
                      </div>

                      <div class="rounded max-w-2xl shadow-xl py-5 px-8">
                        <div class="flex flex-col space-y-3">
                          <div class="flex flex-row space-x-4">
                            <div class="py-3 px-5 bg-red-100 mr-2">
                              <span class="text-red-600 text-xl">5</span>
                            </div>
                            <div class="flex flex-col">
                              <div>
                                <span class="text-xs mb-1">
                                  Schedule for
                                </span>
                              </div>
                              <div>
                                <p class="text-md font-black">Drop Off</p>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-row">
                            <span class="text-xs mr-2">Your next pickup: </span><span class="text-sm font-black">15:00</span>
                          </div>
                        </div>
                      </div>


                  </div>
                </div>
            </div>
          </div>
        </div>


        <div class="basis-1/6 bg-footerBG flex flex-col max-sm:hidden">
          <div class="mb-20">
            <img src="/images/vector.png" alt="" class="float-right m-5" />
          </div>
          <div class="p-8 my-20">
            <p class="text-center">To Help us improve and serve you better, We are constantly taking <span class="text-textColor"> feedback.</span></p>
          </div>
          <hr />
          <div class="p-8 my-10">
            <p class="text-center">Contact Costumer Care Representatives</p>
          </div>
        </div>
      </div>
    </main>
</template>