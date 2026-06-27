import { parseCards } from './parseCards.js';

const raw = `
۱. تصمیم یه دوست برای ول کردن شغلش (گذشته + تغییر نظر)
راستش رو بخوای، من اولش با تصمیم آرش که شغلشو ول کنه و بره دنبال نقاشی، خیلی موافق نبودم. فکر می‌کردم داره یه ریسک الکی می‌کنه. ولی هرچی بیشتر باهاش حرف زدم، بیشتر فهمیدم که این کار براش حکم یه رویای قدیمیه. الان دیگه نظرم عوض شده و بهش گفتم هرکاری دلش می‌خواد بکنه، من پشتشم.
English Translation:
"Honestly, at first I wasn't really on board with Arash's decision to quit his job and go after painting. I thought he was just taking a pointless risk. But the more I talked to him about it, the more I realized this thing means a lot to him — like an old dream he's chasing. Now I've changed my mind, and I told him to go for it, whatever he decides, I've got his back."

* موافق بودن: on board with
* دنبال یه چیزی رفتن: go after [something]
* پشت کسی بودن: I've got his back

۲. بحث سر یه فیلم جنجالی (گذشته + بحث داغ شدن)
دیشب بعد از دیدن اون فیلم، تا ساعت دو بحثمون طول کشید. من می‌گفتم پایان فیلم یه شاهکار بود، ولی سارا اصلاً قبول نداشت و می‌گفت کارگردان فقط می‌خواسته مردمو گیج کنه. یه لحظه فکر کردم بحث داره بالا می‌گیره، برای همین موضوعو عوض کردم. ولی هنوزم فکر می‌کنم نظر من درست‌تر بود.
English Translation:
"Last night, after we watched that movie, the debate dragged on until two in the morning. I was saying the ending was a masterpiece, but Sara totally disagreed and said the director just wanted to mess with people's heads. At one point I thought things were getting a bit heated, so I changed the subject. But I still think I had a point."

* طول کشیدن: drag on
* گیج کردن ذهن کسی: mess with someone's head
* بحث داغ شدن: getting heated

۳. تردید درباره جابه‌جا شدن خانواده (گذشته + غافلگیری)
هفته پیش بابام تو شام پیشنهاد داد که خونه رو بفروشیم و بریم یه شهر کوچیک‌تر. اولش جا خوردم، چون اصلاً انتظارشو نداشتم. مامانم موافق بود ولی من گفتم باید بیشتر فکر کنیم، آخه دوستام همه اینجان. هنوز هیچی قطعی نشده ولی احساس می‌کنم بالاخره مجبوریم یه جوری کنار بیایم.
English Translation:
"Last week, my dad brought up the idea of selling the house and moving to a smaller town, right there at dinner. I was caught off guard at first, didn't see that coming at all. My mom was into it, but I said we should sleep on it, since all my friends are here. Nothing's set in stone yet, but I feel like we're eventually going to have to find a way to make peace with it."

* غافلگیر شدن: caught off guard
* روی موضوع فکر کردن: sleep on it
* هنوز قطعی نشدن: nothing's set in stone

۴. اعتراض به رفتار یه همکار (گذشته + رک حرف زدن)
دیروز تو جلسه، یکی از همکارام وسط حرف من پرید و طرح منو زیر سوال برد، جلوی همه. اولش سعی کردم خونسرد باشم ولی واقعاً عصبانی شدم. بعد جلسه رفتم پیشش و صاف و پوست‌کنده بهش گفتم که این رفتارش اصلاً درست نبود. اون هم عذرخواهی کرد و گفت حواسش نبوده.
English Translation:
"Yesterday in the meeting, one of my coworkers cut me off and started questioning my proposal right in front of everyone. I tried to keep my cool at first, but honestly, I got pretty annoyed. After the meeting I went up to him and told him straight up that what he did wasn't okay. He ended up apologizing and said he didn't mean anything by it."

* وسط حرف کسی پریدن: cut someone off
* خونسردی حفظ کردن: keep one's cool
* رک و پوست‌کنده: straight up

۵. نظر درباره رژیم گرفتن یه دوست (حال + نصیحت)
نمی‌دونم چرا ولی هر دفعه نیلوفر یه رژیم جدید شروع می‌کنه، بعد از دو هفته ولش می‌کنه. بهش گفتم به‌نظرم باید یه چیز پایدارتر پیدا کنه، نه این‌که هر ماه یه روش جدید امتحان کنه. اون البته ناراحت شد و گفت من نمی‌فهمم چقدر سخته. شاید حق با اون باشه، ولی بازم فکر می‌کنم باید روش متفاوتی رو امتحان کنه.
English Translation:
"I don't know why, but every time Niloofar starts a new diet, she gives up on it after two weeks. I told her I think she should find something more sustainable instead of trying a new fad every month. She got a little upset, of course, and said I just don't get how hard it is. Maybe she's got a point, but I still think she should try a different approach."

* از چیزی دست کشیدن: give up on something
* روش/مد زودگذر: fad
* حق داشتن: she's got a point

۶. مخالفت با ایده بازسازی خونه (حال + توافق نکردن)
شوهرم می‌خواد کل آشپزخونه رو خراب کنیم و از نو بسازیم، ولی به‌نظر من فقط داریم پول الکی خرج می‌کنیم. بهش گفتم بیا اول یه بودجه دقیق بنویسیم، بعد تصمیم بگیریم. اون می‌گه من زیادی محتاطم، شاید راست بگه. به هر حال هنوز سر این قضیه به توافق نرسیدیم.
English Translation:
"My husband wants to gut the whole kitchen and rebuild it from scratch, but to me, it feels like we're just throwing money away. I told him let's draw up an actual budget first, then decide. He says I'm being overly cautious, and honestly, maybe he's right. Anyway, we still haven't reached an agreement on this."

* کاملاً خراب کردن یه فضا: gut [a room]
* پول الکی خرج کردن: throw money away
* از صفر: from scratch

۷. انتقاد از روش تدریس یه استاد (حال + تصمیم به اقدام)
استاد ریاضیمون یه روشی داره که اصلاً به دل من نمی‌شینه؛ همش از روی اسلاید می‌خونه و هیچ مثالی نمی‌زنه. بچه‌های کلاس هم همینو می‌گن، ولی هیچ‌کس جرئت نمی‌کنه باهاش حرف بزنه. من تصمیم گرفتم یه ایمیل مودبانه بنویسم و نظرمو بگم، حتی اگه به جایی نرسه.
English Translation:
"Our math professor has this teaching style that just doesn't click with me — he basically just reads off the slides and never gives examples. Everyone in class feels the same way, but nobody dares to bring it up with him. I've decided to write a polite email and share my thoughts, even if nothing comes of it."

* به دل ننشستن: doesn't click with me
* جرئت کردن: dare to [do something]
* به جایی نرسیدن: nothing comes of it

۸. تردید درباره مهاجرت در آینده (حال + آینده)
داریم جدی جدی به مهاجرت فکر می‌کنیم، ولی هنوز مطمئن نیستم این کار درستیه یا نه. از یه طرف فرصت‌های بهتری هست، از طرف دیگه دلم نمیاد از خانواده‌ام دور بشم. شوهرم می‌گه باید ریسک کنیم، وگرنه بعداً پشیمون می‌شیم. شاید حق با اون باشه، فقط باید بیشتر روش فکر کنم.
English Translation:
"We're seriously considering immigrating, but I'm still not a hundred percent sure if it's the right move. On one hand, there are better opportunities out there, but on the other, I can't bring myself to be far from my family. My husband says we have to take the leap, or we'll end up regretting it down the road. Maybe he's right, I just need to think it through a bit more."

* ریسک بزرگ کردن: take the leap
* در آینده: down the road
* دلم نمیاد: can't bring myself to [do something]

۹. شکایت از وضعیت ترافیک شهر (حال + غرغر کردن)
هر روز صبح که تو ترافیک گیر می‌کنم، با خودم می‌گم چرا شهرداری یه فکری به حال این وضع نمی‌کنه. به‌نظرم باید سیستم اتوبوس‌رانی رو جدی‌تر بگیرن، نه این‌که فقط جاده بسازن. دیروز یکی از همکارام می‌گفت من زیادی غرغر می‌کنم، ولی واقعاً این وضعیت دیگه قابل تحمل نیست.
English Translation:
"Every morning when I'm stuck in traffic, I keep wondering why the city hasn't done something about this mess. In my opinion, they should take the bus system more seriously instead of just building more roads. Yesterday one of my coworkers told me I complain too much, but honestly, this situation is just not bearable anymore."

* فکری به حالش کردن: do something about [a problem]
* جدی گرفتن: take [something] seriously
* غیرقابل تحمل بودن: not bearable

۱۰. آماده شدن برای بیان نظر تو جلسه (آینده + محکم وایستادن)
فردا قراره تو جلسه شرکت درباره طرح جدیدم حرف بزنم و واقعاً استرس دارم. می‌دونم بعضیا باهاش مخالفن، ولی تصمیم گرفتم محکم وایستم پشت ایده‌ام. اگه قراره رد بشه، حداقل می‌خوام مطمئن بشم که حرفمو کامل زدم.
English Translation:
"Tomorrow I'm supposed to talk about my new proposal in the company meeting, and I'm honestly nervous about it. I know some people are against it, but I've decided to stand my ground and back my idea. If it's going to get rejected, at least I want to make sure I've said my piece."

* پای حرفت وایستادن: stand one's ground
* از یه ایده حمایت کردن: back [an idea]
* حرفتو کامل زدن: say one's piece

۱۱. اختلاف نظر با خواهرم درباره تربیت بچه‌ها (گذشته + سخت‌گیری)
خواهرم همیشه می‌گه باید بذاریم بچه‌ها هرکاری دلشون می‌خواد بکنن، ولی به‌نظر من یه‌کم محدودیت لازمه. دیشب سر همین موضوع یه بحث کوچیک کردیم. اون گفت من زیادی سخت‌گیرم، ولی من فکر می‌کنم اون داره زیادی راحت می‌گیره. هنوز قانعش نکردم، ولی حداقل حرفامونو زدیم.
English Translation:
"My sister always says we should just let the kids do whatever they want, but in my opinion, they need a bit of structure. We got into a small argument about it last night. She said I'm too strict, but I think she's just too lenient. I haven't convinced her yet, but at least we got it all out in the open."

* وارد بحث شدن: get into an argument
* راحت‌گیر: lenient
* حرف دل رو زدن: get it out in the open

۱۲. نگرانی درباره رابطه جدید یه دوست (حال + فضولی نکردن)
دوستم تازه با یه نفر آشنا شده که به‌نظرم خیلی عجله داره برای جدی کردن رابطه. بهش گفتم نظرمو می‌خوام بگم ولی نمی‌خوام فضولی کرده باشم. اون گفت قدردانیه که نگرانشم، ولی خودش می‌دونه چیکار داره می‌کنه. امیدوارم اشتباه نکرده باشم که نظرمو گفتم.
English Translation:
"My friend just started seeing someone, and to me it feels like she's rushing things a bit too fast. I told her I wanted to share my opinion, but I didn't want to come across as nosy. She said she appreciates that I'm looking out for her, but she knows what she's doing. I just hope I wasn't wrong to speak up."

* به نظر رسیدن: come across as [adjective]
* مراقب کسی بودن: look out for someone
* نظرتو گفتن: speak up

۱۳. شک به یه ایده کاری از طرف یه دوست (حال + امیدواری)
پویا می‌خواد یه کافه باز کنه و ازم خواست نظرمو بگم. راستش به‌نظرم بازار این روزا اشباع شده و ریسکش بالاست. ولی نمی‌خواستم خیلی منفی‌بافی کنم، برای همین گفتم باید بیشتر تحقیق کنه قبل از این‌که سرمایه بذاره. امیدوارم اشتباه کنم و کارش بگیره.
English Translation:
"Pouya wants to open a café and asked me what I thought. Honestly, in my view the market's pretty saturated these days and the risk is high. But I didn't want to sound too negative, so I told him to do more research before putting any money into it. I really hope I'm wrong and it works out for him."

* بازار اشباع‌شده: saturated market
* منفی به نظر رسیدن: sound negative
* نتیجه دادن: work out

۱۴. تأثیر هوا روی حال و حسم امروز (حال + دلگیری)
امروز هوا اونقدر گرفته و دلگیر بود که اصلاً حال نداشتم از تخت بیرون بیام. به‌نظرم آدما خیلی کمتر از چیزی که فکر می‌کنن از هوا تأثیر می‌گیرن، ولی شخصاً برای من تأثیرش زیاده. شاید باید یه شهر آفتابی‌تر زندگی کنم، نمی‌دونم.
English Translation:
"The weather today was so gloomy that I honestly didn't feel like getting out of bed at all. I think people are affected by the weather way more than they realize, and for me personally, it really gets to me. Maybe I should be living somewhere sunnier, I don't know."

* گرفته و دلگیر: gloomy
* حال انجام کاری نداشتن: don't feel like [doing something]
* روی کسی تأثیر منفی گذاشتن: get to someone

۱۵. واکنش به خبر جایگزینی شغل‌ها با هوش مصنوعی (حال + گذشته)
دیروز یه خبر خوندم که می‌گفت خیلی از شغل‌ها تو چند سال آینده با هوش مصنوعی جایگزین می‌شن. اولش ترسیدم، ولی بعد با خودم فکر کردم که هر تحولی یه فرصت جدید هم با خودش میاره. به‌نظرم باید بیشتر روی مهارت‌هایی تمرکز کنیم که ماشین نمی‌تونه انجام بده.
English Translation:
"Yesterday I read an article saying a lot of jobs are going to be replaced by AI in the next few years. At first it freaked me out, but then I thought about how every shift brings new opportunities along with it. I think we should focus more on skills that a machine just can't replicate."

* کسیو ترسوندن: freak someone out
* همراه با خودش آوردن: bring [something] along with it
* تمرکز کردن روی: focus on [something]

۱۶. نظر درباره یه نمایشگاه نقاشی (گذشته + بحث بی‌نتیجه)
دیروز با یه دوست رفتیم نمایشگاه نقاشی، و راستش بعضی آثارش اصلاً به دلم ننشست. دوستم می‌گفت هنر مدرنه و باید عمیق‌تر نگاه کرد، ولی من گفتم به‌نظرم بعضی وقتا هنرمندا فقط دارن قشنگ‌حرف‌زدن می‌کنن. بحثمون به جایی نرسید ولی خوش گذشت.
English Translation:
"Yesterday I went to an art exhibit with a friend, and honestly, some of the pieces just didn't do it for me. My friend kept saying it's modern art and you have to look deeper, but I said I think sometimes artists are just overcomplicating things. We didn't really settle the debate, but it was fun anyway."

* به دلم ننشستن: didn't do it for me
* پیچیده کردن یه چیز ساده: overcomplicate
* بحثی رو به نتیجه رسوندن: settle a debate

۱۷. تردید بین خرید ماشین و پس‌انداز کردن (حال کامل + مردد بودن)
چند ماهه دارم با خودم کلنجار می‌رم که ماشین بخرم یا پولمو پس‌انداز کنم. شوهرم می‌گه با این وضع بازار، الان وقت خوبیه برای خرید. ولی من می‌گم شاید بهتره صبر کنیم و بذاریم اوضاع آروم‌تر بشه. هنوز به نتیجه نرسیدیم.
English Translation:
"I've been going back and forth for months over whether to buy a car or save the money instead. My husband thinks now's actually a good time to buy, given how the market is. But I think maybe we should hold off and wait for things to settle down. We still haven't landed on a decision."

* کلنجار رفتن: go back and forth
* صبر کردن: hold off
* به تصمیم رسیدن: land on a decision

۱۸. انتقاد از عادت استفاده زیاد از شبکه‌های اجتماعی (حال + آینده)
این روزا متوجه شدم خیلی وقتمو صرف اسکرول کردن تو گوشی می‌کنم و واقعاً داره اذیتم می‌کنه. به دوستام گفتم به‌نظرم همه‌مون باید یه‌کم محدودیت زمانی بذاریم، ولی اونا گفتن من دارم اغراق می‌کنم. شاید راست بگن، ولی من قصد دارم از فردا شروع کنم.
English Translation:
"Lately I've noticed how much time I spend mindlessly scrolling on my phone, and it's honestly starting to bother me. I told my friends I think we should all set some kind of time limit, but they said I'm blowing it out of proportion. Maybe they're right, but I'm planning to start cutting back tomorrow."

* بی‌هدف اسکرول کردن: mindlessly scroll
* بزرگ کردن یه موضوع: blow [something] out of proportion
* کم کردن یه عادت: cut back [on something]

۱۹. ابراز پشیمونی از یه بحث قدیمی با پدرم (گذشته + شرطی)
چند سال پیش سر یه موضوع کوچیک با بابام بحث بدی کردم و حرفای تندی زدم که الان واقعاً پشیمونم. اون موقع فکر می‌کردم حتماً باید نظرمو با همون لحن تند بگم تا جدی گرفته بشه. الان می‌فهمم که می‌شد همون حرفو با آرامش بیشتری زد.
English Translation:
"A few years back, my dad and I got into a pretty bad argument over something small, and I said some harsh things I really regret now. Back then I thought I had to push my point across that aggressively for it to be taken seriously. Now I realize I could've said the exact same thing in a much calmer way."

* به‌زور نظرتو تحمیل کردن: push one's point across
* جدی گرفته شدن: taken seriously
* افسوس از گذشته: could've + p.p

۲۰. نظر درباره یه کتاب که الان دارم می‌خونم (حال کامل + حال ساده)
الان وسطای یه کتابم که خیلیا بهم پیشنهادش دادن، ولی هنوز نتونستم باهاش ارتباط برقرار کنم. شاید چون انتظارم خیلی بالا بود. بعضیا می‌گن باید صبر کنم تا فصل‌های آخر، ولی من معمولاً اگه یه کتاب اولش جذبم نکنه، ادامه نمی‌دم.
English Translation:
"I'm right in the middle of this book that a bunch of people recommended to me, but I just haven't been able to connect with it so far. Maybe my expectations were just set too high. Some people say I should wait until the last few chapters, but I'm usually the type who won't push through a book if it doesn't hook me from the start."

* باهاش ارتباط برقرار کردن: connect with [a book/story]
* انتظار بالا بردن: set expectations [high/low]
* جذب کردن: hook someone
`;

export const expressingOpinions = parseCards(raw, {
  category: 'Expressing Opinions',
  startId: 101,
});