import { parseCards } from './parseCards.js';

const raw = `
۱. جا موندن از اتوبوس (گذشته ساده + اصطلاحات روزمره)
امروز صبح از اون روزهایی بود که انگار همه‌چیز دست به دست هم داده بود تا دیر برسم. فقط دو دقیقه دیر از خونه زدم بیرون، ولی همون دو دقیقه باعث شد اتوبوس جلوی چشمم بره. یه لحظه وسوسه شدم دنبالش بدوم، اما بی‌خیال شدم و رفتم یه قهوه گرفتم تا اعصابم آروم بشه. آخرش هم فهمیدم جلسه‌ای که براش عجله داشتم ده دقیقه دیرتر شروع شده.
English Translation:
"This morning was one of those days when everything seemed to be working against me. I left the house just two minutes late, but that was enough to miss the bus right in front of me. For a second, I thought about running after it, but I decided not to bother and grabbed a coffee instead to calm myself down. In the end, it turned out the meeting I was rushing to started ten minutes late anyway."

* دست به دست هم دادن: everything seemed to be working against me
* بی‌خیال شدن: not bother
* آخرش معلوم شد: it turned out

۲. منتظر یک تماس مهم بودن (گذشته استمراری + احساس اضطراب)
دیروز کل بعدازظهر منتظر یه تماس مهم بودم. هر چند دقیقه یه بار گوشیم رو چک می‌کردم، حتی وقتی هیچ صدایی نشنیده بودم. هرچی زمان می‌گذشت بیشتر استرس می‌گرفتم. درست وقتی داشتم ناامید می‌شدم، تلفنم زنگ خورد و همه‌چی بهتر شد.
English Translation:
"Yesterday, I spent the whole afternoon waiting for an important phone call. I kept checking my phone every few minutes, even when I hadn't heard it ring. The more time passed, the more anxious I got. Just when I was starting to lose hope, my phone rang and everything got better."

* هر چند دقیقه یک بار: every few minutes
* استرس گرفتن: get anxious
* درست وقتی...: just when...

۳. خرید عجولانه (گذشته کامل)
قبل از اینکه نظرات مردم رو بخونم، اون هدفون رو خریده بودم. فکر می‌کردم معامله خوبی پیدا کرده‌ام، اما بعد فهمیدم خیلی‌ها از کیفیتش ناراضی بودن. اگه کمی بیشتر تحقیق کرده بودم، احتمالاً انتخاب بهتری می‌کردم.
English Translation:
"I'd already bought those headphones before reading any reviews. I thought I'd found a great deal, but later I realized a lot of people weren't happy with the quality. If I'd done a bit more research, I probably would've made a better choice."

* معامله خوب: a great deal
* تحقیق کردن: do research
* احتمالاً: probably would've

۴. برنامه آخر هفته (آینده)
این آخر هفته قراره با چندتا از دوستام بریم کنار دریا. هنوز دقیق نمی‌دونیم چه کار خواهیم کرد، ولی احتمالاً بیشتر وقتمون رو به گشتن و حرف زدن می‌گذرونیم. فقط امیدوارم هوا مثل هفته قبل خراب نشه.
English Translation:
"This weekend, I'm going to the beach with a few friends. We haven't figured out exactly what we'll do yet, but we'll probably spend most of our time walking around and catching up. I just hope the weather doesn't turn bad like it did last week."

* قراره: be going to
* گشتن: walk around
* حرف زدن: catch up

۵. همسایه جدید (حال کامل)
چند هفته است که یه همسایه جدید به ساختمون ما اومده. هنوز خیلی باهاش صحبت نکرده‌ام، ولی هر بار که می‌بینمش خیلی خوش‌برخورد به نظر میاد. احتمالاً یه روز برای قهوه دعوتش می‌کنم.
English Translation:
"A new neighbor has moved into our building a few weeks ago. I haven't talked to him much yet, but he seems really friendly whenever I see him. I'll probably invite him over for coffee one of these days."

* خوش‌برخورد: friendly
* دعوت کردن: invite someone over
* یکی از این روزها: one of these days

۶. خراب شدن لپ‌تاپ (حال کامل استمراری)
چند روزه دارم سعی می‌کنم بفهمم چرا لپ‌تاپم اینقدر کند شده. هر بار فکر می‌کنم مشکل رو پیدا کرده‌ام، یه چیز جدید پیش میاد. کم‌کم دارم به این نتیجه می‌رسم که وقت عوض کردنش رسیده.
English Translation:
"I've been trying to figure out why my laptop has gotten so slow for the past few days. Every time I think I've found the problem, something else comes up. I'm starting to think it's time for a replacement."

* فهمیدن: figure out
* یه چیز جدید پیش اومدن: something comes up
* نتیجه گرفتن: come to the conclusion

۷. گم کردن کلید
دیروز نزدیک بود سکته کنم وقتی دیدم کلید خونه توی جیبم نیست. همه جا رو گشتم؛ کیفم، ماشینم، حتی یخچال رو هم چک کردم! آخر سر فهمیدم از اول روی میز آشپزخونه بوده.
English Translation:
"I almost had a heart attack yesterday when I realized my house key wasn't in my pocket. I looked everywhere—my bag, my car, I even checked the fridge! In the end, it turned out it had been sitting on the kitchen table the whole time."

* نزدیک بود سکته کنم: I almost had a heart attack
* همه جا گشتن: look everywhere
* تمام مدت: the whole time

۸. تصمیم لحظه آخری
دیشب اصلاً قصد بیرون رفتن نداشتم، ولی یکی از دوستام دقیقه نود زنگ زد و پیشنهاد داد یه چیزی بخوریم. پنج دقیقه بعد آماده بودم و از خونه زدم بیرون. بعضی از بهترین برنامه‌ها همین‌جوری اتفاق می‌افتن.
English Translation:
"I wasn't planning on going out last night at all, but one of my friends called me at the last minute and suggested grabbing a bite. Five minutes later, I was ready and out the door. Some of the best plans happen like that."

* دقیقه نود: at the last minute
* یه چیزی خوردن: grab a bite
* از خونه زدن بیرون: be out the door

۹. صف طولانی
امروز برای خرید فقط یه قلم جنس لازم داشتم، اما وقتی به صندوق رسیدم صف خیلی طولانی بود. چند بار خواستم بی‌خیال خرید بشم و برگردم خونه، ولی چون راه زیادی اومده بودم، منتظر موندم.
English Translation:
"Today I only needed to buy one thing, but when I got to the checkout, the line was ridiculously long. A few times I thought about giving up and heading home, but I'd already come all that way, so I stayed."

* صندوق: checkout
* بی‌خیال شدن: give up

۱۰. باران ناگهانی
صبح که از خونه بیرون اومدم، هوا کاملاً آفتابی بود. برای همین چترم رو برنداشتم. حدود یک ساعت بعد باران شدیدی گرفت و کاملاً خیس شدم. از اون اتفاق‌هایی بود که فقط می‌تونی بخندی و بگذری.
English Translation:
"When I left home this morning, the weather was perfectly sunny, so I didn't bring an umbrella. About an hour later, it started pouring and I got soaked. It was one of those situations where all you can do is laugh it off."

* باران شدید: start pouring
* خیس شدن: get soaked
* خندیدن و رد شدن: laugh it off

۱۱. پیام اشتباهی
هفته پیش یه پیام رو اشتباهی برای آدم اشتباهی فرستادم. همون لحظه که دکمه ارسال رو زدم فهمیدم چه گندی زده‌ام. چند ثانیه به صفحه خیره موندم و امیدوار بودم معجزه‌ای اتفاق بیفته.
English Translation:
"Last week, I accidentally sent a message to the wrong person. The second I hit send, I realized how badly I'd messed up. I just stared at the screen for a few seconds, hoping some kind of miracle would stop it from being delivered."

* گند زدن: mess up
* خیره شدن: stare at
* آدم اشتباهی: the wrong person

۱۲. ورزش بعد از مدت طولانی
بعد از چند ماه تنبلی، بالاخره امروز رفتم باشگاه. ده دقیقه اول احساس می‌کردم پر از انرژی‌ام، اما نیم ساعت بعد نفسم بالا نمی‌اومد. ظاهراً بدنم فراموش نکرده بود.
English Translation:
"After months of doing nothing, I finally went back to the gym today. For the first ten minutes, I felt full of energy, but half an hour later I was completely out of breath. Apparently, my body hadn't forgotten."

* تنبلی: slack off
* نفس کم آوردن: out of breath
* غافل شدن: neglect

۱۳. تعریف شدن از کار
امروز رئیس از کاری که انجام داده بودم تعریف کرد. شاید برای بقیه موضوع مهمی نباشه، اما واقعاً روزم رو ساخت.
English Translation:
"My boss complimented me on my work today. It might not seem like a big deal, but it genuinely made my day."

* تعریف کردن: compliment
* روز ساختن: made my day
* تأثیر داشتن: have an impact

۱۴. عوض شدن برنامه
همه‌چیز طبق برنامه پیش می‌رفت تا اینکه یه تماس غیرمنتظره گرفتم. ظرف چند دقیقه تمام برنامه‌ها عوض شد.
English Translation:
"Everything was going according to plan until I got an unexpected phone call. Within minutes, my entire schedule changed."

* طبق برنامه: according to plan
* حرص خوردن: be annoyed

۱۵. بیدار ماندن تا دیر وقت
دیشب فقط می‌خواستم یک قسمت سریال ببینم، اما سه قسمت پشت سر هم دیدم و خیلی دیر شد.
English Translation:
"Last night, I only intended to watch one episode, but before I knew it, I'd watched three in a row and it got really late."

* قبل از اینکه بفهمم: before I knew it
* پشت سر هم: in a row

۱۶. غذای جدید
غذایی رو امتحان کردم که اسمش رو سخت می‌تونستم تلفظ کنم ولی خیلی خوشم اومد.
English Translation:
"I tried a dish I could barely pronounce, but I really liked it."

* انتظار نداشتن: not expect much
* غافلگیر شدن: be surprised

۱۷. کمک از غریبه
از یه غریبه کمک گرفتم و برخلاف انتظارم خیلی کمکم کرد.
English Translation:
"I asked a stranger for help, and surprisingly he helped me a lot."

* گم شدن: get lost
* راه نشان دادن: point the way

۱۸. کار نیمه‌تمام
هر بار می‌خوام کارم رو تموم کنم یه چیزی حواسم رو پرت می‌کنه.
English Translation:
"Every time I try to finish my work, something distracts me."

* حواس‌پرتی: distract
* سر و کله پیدا شدن: pop up

۱۹. فراموش کردن اسم
اسمش یادم نیومد و مجبور شدم مکالمه رو ادامه بدم بدون اینکه اسمش رو بگم.
English Translation:
"I couldn't remember their name and had to continue the conversation without saying it."

* دیدن کسی: run into someone
* موقعیت عجیب: awkward situation

۲۰. منتظر تعطیلات
این روزها فقط روزها رو می‌شمرم تا تعطیلات برسه. فقط نیاز به استراحت دارم.
English Translation:
"These days I'm just counting down the days until vacation. I just need a proper break."

* روز شمردن: count down the days
* استراحت: proper break
`;

export const dailyConversation = parseCards(raw, {
  category: 'Daily Conversation',
  startId: 1,
});