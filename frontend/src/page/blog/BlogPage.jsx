
const BlogPage = () => {
  return (
    <>
      <main class="container max-w-screen-xl mx-auto px-4 mt-7">
			<div class="flex items-center relative">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 absolute left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input type="text" placeholder="Search Article" class="border rounded-lg py-3 pl-12 w-full md:w-72" />
			</div>
			<p class="text-2xl font-medium py-5">Recently Blog</p>
			<div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
				<article class="col-span-2 border shadow rounded-lg p-5 mb-5 md:mb-0">
					<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*yBt65HhmARbqZDDJ1McFDg.png" class="w-full h-[450px] object-cover" alt="image-not-found" />
					<p class="text-lg font-normal py-2">By <span class="text-[#592EA9] hover:underline cursor-pointer">Nour Eldin</span> | May 23 , 2024</p>
					<a href="./blog-details.html"><h1 class="text-2xl font-medium hover:underline cursor-pointer">Mastering the Art of Writing a Blog Post: A Step-by-Step Guide for 2024</h1></a>
					<p class="py-3 text-gray-500">Starting a blog was one of the most rewarding things Ive done in my career. As someone who loves writing and connecting with readers, having an outlet to share my thoughts while potentially helping others has been an incredible experience.</p>
					<a href="./blog-details.html">
						<button class="background-secondary-color font-medium py-3 px-5 rounded-lg hover:text-[#FFD050] hover:bg-[#232536]">Read More <i class="bi bi-chevron-right"></i></button>
					</a>
				</article>
				<article class="flex-col flex gap-4 w-full cursor-pointer">
					<div class="border p-5 rounded-lg flex gap-5 hover:bg-gray-50">
						<img src="./img/blog/blog-08.png" class="w-32 h-32 object-cover rounded-lg" alt="image-not-found" />
						<div>
							<p class="md:text-md font-normal py-2">By <span class="text-[#592EA9] hover:underline cursor-pointer">JOscar Jaramillo</span> | Oct 2, 2024</p>
							<h1 class="text-md md:text-xl font-medium hover:underline cursor-pointer">ResultsIQ Achieves Diamond Status: What This Means for You.</h1>
						</div>
					</div>
					<div class="border p-5 rounded-lg flex gap-5 hover:bg-gray-50">
						<img src="./img/blog/blog-07.png" class="w-32 h-32 object-cover rounded-lg" alt="image-not-found" />
						<div>
							<p class="text-md font-normal py-2">By <span class="text-[#592EA9] hover:underline cursor-pointer">Cathy Boudreau</span> | Sep 26, 2024</p>
							<h1 class="text-md md:text-xl font-medium hover:underline cursor-pointer">INBOUND 2024 Recap: HubSpot's AI Updates for Faster Business Growth.</h1>
						</div>
					</div>
					<div class="border p-5 rounded-lg flex gap-5 hover:bg-gray-50">
						<img src="./img/blog/blog-04.png" class="w-32 h-32 object-cover rounded-lg" alt="image-not-found" />
						<div>
							<p class="text-md font-normal py-2">By <span class="text-[#592EA9] hover:underline cursor-pointer">Oscar Jaramillo</span> |  Sep 6, 2024</p>
							<h1 class="text-md md:text-xl font-medium hover:underline cursor-pointer">Scholes Marketing is Now ResultsIQ.</h1>
						</div>
					</div>
					<p class="mt-2 hover:underline hover:text-[#ffd050] text-lg flex justify-center items-center">Read More ...</p>
				</article>
			</div>

			<h5 class="text-2xl font-medium py-5">All Post</h5>
			<div class="grid grid-cols-1 gap-4 mb-20">
				<div class="grid md:flex gap-10 p-4 border rounded-lg">
					<img src="https://www.resultsiq.io/hs-fs/hubfs/GenAI-in-Marketing-blog_3-2.jpg?width=1950&height=1300&name=GenAI-in-Marketing-blog_3-2.jpg" alt="City View" class="w-full md:w-96 h-[230px] object-cover rounded-lg cursor-pointer" />
					<div>
						<div class="bg-amber-100 w-28 text-center font-medium rounded-md py-1 px-2">Technology</div>
						<h2 class="text-2xl font-medium py-3 hover:underline cursor-pointer">AI Content: Friend or Foe? The Data Shows the Surprising Truth</h2>
						<p class="pb-3 text-lg text-gray-500">Perhaps no technology has been as hyped, or as feared, as generative AI. Launched by the release of ChatGPT in November 2022, already two-thirds of...</p>
						<div class="flex items-center justify-between pt-2">
							<div class="flex">
								<img src="./img/blog/profile-04.png" alt="proflie" class="w-14 h-14 rounded-full cursor-pointer" />
								<div class="pl-5">
									<span class="text-lg">Viola Manisa</span><br />
									<span class="font-medium">Aug 23, 2021</span>
								</div>
							</div>
							<div>
								<button class="background-secondary-color font-medium py-3 px-5 rounded-lg hover:text-[#FFD050] hover:bg-[#232536]">Read More <i class="bi bi-chevron-right"></i></button>
							</div>
						</div>
					</div>
				</div>
				<div class="grid md:flex gap-10 p-4 border rounded-lg ">
					<img src="https://www.resultsiq.io/hs-fs/hubfs/resultsiq/Blog/CMO-Challenges-iStock-639330728_3-2.jpeg?width=1727&height=1151&name=CMO-Challenges-iStock-639330728_3-2.jpeg" alt="City View" class="w-full md:w-96 h-[230px] object-cover rounded-lg cursor-pointer" />
					<div>
						<div class="bg-cyan-200 w-28 text-center font-medium rounded-md py-1 px-2">Business</div>
						<h2 class="text-2xl font-medium py-3 hover:underline cursor-pointer">The Evolution of Digital Content and What Lies Ahead for Marketers</h2>
						<p class="pb-3 text-lg text-gray-500">In the past ten years, digital and content marketing has grown from a niche endeavor to dominating the profession to the point that it has become the...</p>
						<div class="flex items-center justify-between pt-2">
							<div class="flex">
								<img src="./img/blog/profile-01.png" alt="proflie" class="w-14 h-14 rounded-full cursor-pointer" />
								<div class="pl-5">
									<span class="text-lg"> Lisa O'Brien</span><br />
									<span class="font-medium">Aug 23, 2021</span>
								</div>
							</div>
							<div>
								<button class="background-secondary-color font-medium py-3 px-5 rounded-lg hover:text-[#FFD050] hover:bg-[#232536]">Read More <i class="bi bi-chevron-right"></i></button>
							</div>
						</div>
					</div>
				</div>
				<div class="grid md:flex gap-10 p-4 border rounded-lg">
					<img src="https://www.resultsiq.io/hs-fs/hubfs/Imported_Blog_Media/iStock-1351833129_Evolution-of-Digital-Content-1.jpg?width=2121&height=1414&name=iStock-1351833129_Evolution-of-Digital-Content-1.jpg" alt="City View" class="w-full md:w-96 h-[230px] object-cover rounded-lg cursor-pointer" />
					<div>
						<div class="bg-violet-200 w-28 text-center font-medium rounded-md py-1 px-2">Marketing</div>
						<h2 class="text-2xl font-medium py-3 hover:underline cursor-pointer">Unchartered Territory: Navigating the Evolving CMO Marketing Landscape in 2024</h2>
						<p class="pb-3 text-lg text-gray-500">Digital marketing now dominates our industry, and with it comes major challenges for CMOs. For starters, managing the data, tools and applications...</p>
						<div class="flex items-center justify-between pt-2">
							<div class="flex">
								<img src="./img/blog/profile-02.png" alt="proflie" class="w-14 h-14 rounded-full cursor-pointer" />
								<div class="pl-5">
									<span class="text-lg">Boudreau</span><br />
									<span class="font-medium">Aug 23, 2021</span>
								</div>
							</div>
							<div>
								<button class="background-secondary-color font-medium py-3 px-5 rounded-lg hover:text-[#FFD050] hover:bg-[#232536]">Read More <i class="bi bi-chevron-right"></i></button>
							</div>
						</div>
					</div>
				</div>
				<div class="grid md:flex gap-10 p-4 border rounded-lg">
					<img src="https://www.resultsiq.io/hs-fs/hubfs/Imported_Blog_Media/cerca-personas-que-trabajan-oficina%20%281%29-1.jpg?width=3559&height=2375&name=cerca-personas-que-trabajan-oficina%20%281%29-1.jpg" alt="City View" class="w-full md:w-96 h-[230px] object-cover rounded-lg cursor-pointer" />
					<div>
						<div class="bg-emerald-100 text-black w-28 text-center font-medium rounded-md py-1 px-2">Marketing</div>
						<h2 class="text-2xl font-medium py-3 hover:underline cursor-pointer">The Rise of Intelligent Marketing: How AI is Reshaping the Industry</h2>
						<p class="pb-3 text-lg text-gray-500">It's hard to imagine a technology more transformational for marketing than the emergence of the public Internet. But it appears that AI — and...</p>
						<div class="flex items-center justify-between pt-2">
							<div class="flex">
								<img src="./img/blog/profile-03.png" alt="proflie" class="w-14 h-14 rounded-full cursor-pointer" />
								<div class="pl-5">
									<span class="text-lg">Viola Manisa</span><br />
									<span class="font-medium">Aug 23, 2021</span>
								</div>
							</div>
							<div>
								<button class="background-secondary-color font-medium py-3 px-5 rounded-lg hover:text-[#FFD050] hover:bg-[#232536]">Read More <i class="bi bi-chevron-right"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
    </>
  );
}

export default BlogPage;