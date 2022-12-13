<template>
    <main>
      <div class="flex flex-row">
        <div class="basis-1/6 bg-dashboardAside border-r-8 border-textColor flex flex-col">
          <div class="w-full">
            <img src="/images/logo.png" class="w-36 py-8 mb-5 px-4"/>
          </div>
          
          <ul class="mb-10">
            <li class="bg-navlinkTrans border-l-8 border-textColor py-8 px-2">
              <NuxtLink to="/" class="text-white text-lg font-bold"><Icon name="uil:home" /><span class="ml-3">Home</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans border-l-8 border-textColor py-8 px-2">
              <NuxtLink to="/" class="text-white text-lg font-bold "><Icon name="uil:home" /><span class="ml-3">Deliveries</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans border-l-8 border-textColor py-8 px-2">
              <NuxtLink to="/" class="text-white text-lg font-bold "><Icon name="uil:home" /><span class="ml-3">Account Balance</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans border-l-8 border-textColor py-8 px-2">
              <NuxtLink to="/" class="text-white text-lg font-bold "><Icon name="uil:home" /><span class="ml-3">Auto Fulfilment</span> </NuxtLink>
            </li>
            <li class="bg-navlinkTrans border-l-8 border-textColor py-8 px-2">
              <NuxtLink to="/" class="text-white text-lg font-bold "><Icon name="uil:home" /><span class="ml-3">Settings</span> </NuxtLink>
            </li>
          </ul>

          <p class="text-white mt-10 mb-5">About |  Terms and Condition | Legal | Fees</p>
          <span class="text-secondaryTextColor mb-5">
            &copy; 2022 Zoommit
          </span>
        </div>
        <div class="basis-4/6">
          <div class="flex flex-col">
            <nav>
              
            </nav>
          </div>
        </div>
        <div class="basis-1/6 bg-footerBG flex flex-col">
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