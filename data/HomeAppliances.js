import { parseCards } from './parseCards.js';

const raw = `
۱. ماشین لباسشویی (مشکل: تخلیه نکردن و بوی سوختگی)
بابا باز این لباسشویی بازی درآورده! وسط سیکل شستشو یهو ایستاد و کلی آب کف کثیف کفش جمع شده و تکون نمی‌خوره. بدتر از همه اینکه یه بوی سیم‌سوخته شدید هم از پشتش می‌آد. فکر کنم پمپش سوخته یا یه چیزی توش گیر کرده. جرات نمی‌کنم دوباره روشنش کنم، می‌ترسم کلاً اتصالی کنه و سیم‌کشی خونه فیوز بپرونه.

English Translation:

"Ugh, the washing machine is acting up again! It just stopped mid-cycle, and now there’s a ton of dirty, soapy water sitting at the bottom that won't drain. To make matters worse, there’s a strong burning smell coming from the back. I’m thinking the pump might be fried or something is jammed in there. I’m too scared to turn it back on—I don't want it to short-circuit and blow a fuse."

* to act up: بازی درآوردن / درست کار نکردن وسیله

* mid-cycle: وسط سیکل (شستشو)

* fried: (اصطلاح عامیانه) سوخته و از کار افتاده (بر اثر برق یا حرارت)

* to blow a fuse: فیوز پراندن

۲. یخچال (مشکل: اتومات نکردن و یخ زدن مواد)
یخچال مگنته اصلاً اتومات نمی‌کنه، یکسره داره کار می‌کنه و صداش رو مخه. دیشب متوجه شدم تمام کاهوها و گوجه‌هایی که تو جامیوه‌ای گذاشته بودم یخ زدن و خراب شدن. فکر کنم ترموستاتش غزل‌خداحافظی رو خونده! باید تا قبل از اینکه موتور بنده خدا بسوزه، یه تعمیرکار بیارم نگاهش کنه، وگرنه روی دستم یه خرج سنگین می‌ذاره.

English Translation:

"The fridge keeps running constantly without kicking off, and the noise is driving me crazy. Last night, I noticed that all the lettuce and tomatoes I put in the crisper drawer were completely frozen and ruined. I think the thermostat has finally gone caput! I need to get a technician to look at it before the compressor burns out, otherwise, it's going to cost me an arm and a leg."

* to kick off / click off: اتومات کردن (خاموش شدن موقت موتور)

* crisper drawer: جامیوه‌ای یخچال

* to go caput (or kaput): خراب شدن / غزل‌خداحافظی رو خواندن

* to cost an arm and a leg: خرج سنگین روی دست کسی گذاشتن

۳. مایکروویو (مشکل: نچرخیدن سینی و گرم نکردن)
داشتم غذای دیشب رو گرم می‌کردم که دیدم مایکروویو صداش عوض شد. سینی گردونِ داخلش اصلاً نمی‌چرخه و بعد از سه دقیقه، ظرف غذا رو که درآوردم دیدم یخِ یخه، انگار نه انگار! دکمه‌هاش کار می‌کنن و تایمرش هم عقب می‌ره، ولی اصلاً اشعه نمی‌ده که غذا گرم بشه. نمی‌دونم ارزش تعمیر داره یا باید کلاً بفرستمش بره پی کارش.

English Translation:

"I was heating up last night's leftovers when I noticed the microwave started making a weird noise. The turntable inside isn't spinning at all, and when I took the dish out after three minutes, it was still ice-cold—like it hadn't even been in there! The buttons work and the timer counts down, but it’s just not heating anything up. I'm not sure if it's worth fixing or if I should just scrap it."

* leftovers: غذای باقیمانده / دیشب

* turntable: سینی گردان مایکروویو

* counts down: (تایمر) عقب می‌ره / معکوس می‌شماره

* to scrap something: چیزی را دور انداختن / فرستادن پی کارش

۴. پکیج و رادیاتورها (مشکل: افت فشار و هوا داشتن)
از صبح که بیدار شدم خونه مثل یخچاله. رفتم سراغ پکیج، دیدم عقربه فشارش چسبیده به صفر. هرچی هم شیر پرکن زیرش رو باز می‌کنم، فشارش بالا نمی‌آد که نمی‌آد. رادیاتور اتاق خواب هم انگار هوا گرفته؛ نصفش داغه، نصف پایینش کاملاً سرده. با این وضعیت سرمای بیرون، امشب رو باید با سه تا پتو سر کنیم تا فردا سرویس‌کار بیاد.

English Translation:

"Since I woke up this morning, the house has been freezing cold. I checked the boiler and the pressure gauge is bottomed out at zero. No matter how much I open the filling loop underneath, the pressure just won't budge. It seems like the bedroom radiator needs bleeding too; the top half is warm but the bottom is stone-cold. With this freezing weather outside, we'll have to bundle up under three blankets tonight until the tech shows up tomorrow."

boiler: پکیج / آبگرمکن دیواری

* pressure gauge is bottomed out: عقربه فشار چسبیده به کف (صفر)

* won't budge: اصلاً تکون نمی‌خوره / تغییر نمی‌کنه

* to bleed a radiator: هواگیری کردن رادیاتور

* to bundle up: لباس گرم زیاد پوشیدن / پتو دور خود پیچیدن

۵. کولر گازی (مشکل: آب چکان کردن و باد گرم زدن)
کولر گازی پذیرایی به جای اینکه خنک کنه، قشنگ داره باد ولرم می‌زنه. نیم ساعت پیش هم متوجه شدم از پنل داخلیش داره همین‌جوری آب چکه می‌کنه روی فرش! مجبور شدم یه سطل بذارم زیرش. فکر کنم لوله تخلیه‌ش گرفتگی داره یا شاید هم گازش تموم شده که این‌جوری بازی درمیاره. تو این چله تابستون واقعاً بدون کولر سخته.

English Translation:

"The AC in the living room is blowing lukewarm air instead of cooling down the place. Then, about half an hour ago, I noticed it started dripping water straight from the indoor unit onto the carpet! I had to put a bucket underneath. I'm guessing the condensate drain line is clogged, or maybe it's low on Freon. Living without AC in the dead of summer is honestly unbearable."

* lukewarm air: باد ولرم

* condensate drain line: لوله تخلیه آب (ناودانی کولر)

* low on Freon: کم بودن گاز کولر

* in the dead of summer: در چله تابستان

۶. ماشین ظرفشویی (مشکل: کثیف شستن و لکه گذاشتن)
جدیداً ماشین ظرفشویی اصلاً ظرف‌ها رو تمیز نمی‌شوره. لکه‌های چربی و غذا روی بشقاب‌ها باقی می‌مونه و روی لیوان‌ها هم یه لایه کدر و سفید می‌شینه، انگار که پودر شوینده اصلاً حل نمیشه. نمک و مایع جلادهنده هم توش ریختم ولی فرقی نکرده. احتمالاً بازوهای آب‌پاشش رسوب گرفته و آب با فشار به ظرف‌ها نمی‌رسه.

English Translation:

"Lately, the dishwasher has been doing a terrible job. It leaves grease and food particles all over the plates, and the glasses come out with this cloudy, white film, as if the detergent isn't dissolving at all. I've already refilled the salt and rinse aid, but it hasn't made a difference. The spray arms are probably clogged with limescale, so the water isn't hitting the dishes with enough pressure."

* doing a terrible job: کارش رو افتضاح انجام دادن (تمیز نشستن)

* cloudy, white film: لایه کدر و سفید رنگ (ناشی از رسوب یا شوینده)

* rinse aid: مایع جلادهنده ظرفشویی

* limescale: جرم / رسوب آهکی آب

۷. اتو بخار (مشکل: رسوب دادن و سوزاندن پارچه)
داشتم پیراهن سفیدم رو برای مهمونی اتو می‌کردم که اتو بخار یهو کلی جرم و آب قهوه‌ای رنگ پس داد روی آستینش و کثیفش کرد. تنظیمات دمای اتو هم قاطی کرده؛ با اینکه گذاشته بودمش روی درجه کم، ولی جوری داغ شد که نزدیک بود پارچه رو بسوزونه و جاش بمونه. فکر کنم رسوب‌زدایی لازم داره و ترموستاتش هم رد داده.

English Translation:

"I was ironing my white shirt for the party when the steam iron suddenly spat out a bunch of gunk and brown water all over the sleeve, ruining it. The temperature control is also acting crazy; even though I had it on a low setting, it got so hot it almost scorched the fabric and left a mark. I think it badly needs descaling, and the thermostat is completely shot."

* to spit out gunk: جرم و کثیفی پس دادن / تف کردن!

* to scorch: سوزاندن سطحی (پارچه) طوری که تغییر رنگ دهد

* descaling: رسوب‌زدایی

* completely shot: کاملاً خراب شده / از کار افتاده

۸. جاروبرقی (مشکل: افت شدید مکش و صدای ناهنجار)
جاروبرقی ما دیگه نفسش بالا نمی‌آد! مکشش به شدت افت کرده، طوری که حتی یه تیکه آشغال کوچیک رو هم از روی فرش بلند نمی‌کنه. در عین حال، موتور صداش مثل هواپیما شده، یه صدای جیغ ناهنجاری میده که گوش آدم کر میشه. کیسه‌ش رو خالی کردم و فیلترش رو هم شستم، ولی اصلاً فرقی نکرد. انگار یه چیزی تو لوله‌ش گیر کرده یا موتور به خرخر افتاده.

English Translation:

"Our vacuum cleaner is on its last legs! The suction power has dropped significantly; it won't even pick up a tiny piece of lint from the carpet. At the same time, the motor sounds like a jet engine—making this high-pitched whining noise that's absolutely deafening. I've emptied the bag and washed the filter, but it didn't help at all. Either something is stuck in the hose, or the motor is about to give out."

* on its last legs: غزل‌خداحافظی رو خواندن / نفس‌های آخر را کشیدن

* lint: پرز / آشغال ریز روی فرش

* high-pitched whining noise: صدای جیغ ناهنجار و تیز

* to give out: از کار افتادن / خراب شدن موتور

۹. اجاق گاز (مشکل: روشن نماندن شعله و جرقه نزدن)
شعله بزرگ اجاق گاز اصلاً روشن نمی‌مونه. فندکش جرقه می‌زنه، ولی به محض اینکه دستم رو از روی ولوم برمی‌دارم، گاز قطع میشه و شعله خاموش میشه. باید ده ثانیه کامل دستم رو روش نگه دارم تا شاید، اونم اگه شانس بیارم، روشن بمونه. فکر کنم ترموکوپلش خراب شده و باید عوض بشه. آشپزی با این وضعیت واقعاً رو مخه.

English Translation:

"The main burner on the stove won't stay lit. The igniter sparks just fine, but the moment I let go of the knob, the gas cuts off and the flame goes out. I have to hold the knob down for a solid ten seconds, and even then, if I'm lucky, it might stay on. I’m pretty sure the thermocouple is faulty and needs to be replaced. Cooking with this setup is beyond frustrating."

* burner: شعله / اجاق

* won't stay lit: روشن نمی‌مونه

* to let go of the knob: دست را از روی ولوم / دکمه چرخشی برداشتن

* beyond frustrating: به شدت رو مخ / فراتر از کلافه‌کننده

۱۰. تلویزیون (مشکل: خطوط روی صفحه و قطع و وصل شدن تصویر)
وسط تماشای مسابقه فوتبال، یهو روی صفحه تلویزیون چندتا خط عمودی رنگی افتاد. اول فکر کردم موقتیه، ولی بعد تصویر شروع کرد به پرش داشتن و کلاً سیاه شد، هرچند صداش هنوز میاد. چند بار فیش‌هاش رو پشت تلویزیون تکون دادم و خاموش روشنش کردم، ولی درست نشد. می‌ترسم پنلش سوخته باشه که اگر این‌طور باشه، خرجش اندازه یه تلویزیون نو میشه.

English Translation:

"Right in the middle of the football match, a few vertical colored lines suddenly appeared across the TV screen. At first, I thought it was temporary, but then the picture started flickering and went completely black, though the audio is still playing. I wiggled the cables in the back and power-cycled it a few times, but no luck. I'm worried the panel is fried, and if that’s the case, fixing it will cost as much as buying a brand-new TV."

* flickering: پرش داشتن / قطع و وصل شدن تصویر

* to wiggle the cables: تکان دادن فیش‌ها / کابل‌ها برای رفع قطعی

* to power-cycle: خاموش و روشن کردن دستگاه (از برق کشیدن و زدن)

* no luck: بی‌فایده بودن / درست نشدن

۱۱. چای‌ساز / کتری برقی (مشکل: قطع نکردن بعد از جوش آمدن)
کتری برقی جدیداً وقتی آب جوش میاد، کلیدش خودبخود بالا نمی‌پره تا خاموش بشه. دیشب یادم رفت حواسم بهش باشه، این‌قدر یکسره جوشید که تمام آبش بخار شد و نزدیک بود کتری بسوزه و آتش‌سوزی راه بیفته. سنسور بخارش حتماً خراب شده. تا وقتی درستش نکردم، دیگه نباید بدون مراقبت رهاش کنم.

English Translation:

"The electric kettle has stopped shutting off automatically lately when the water hits a rolling boil. Last night, I forgot to keep an eye on it, and it boiled dry. It almost burnt out and could have started a fire! The steam sensor must be broken. Until I get it fixed, I shouldn't leave it unattended under any circumstances."

* rolling boil: جوش آمدن کامل و قل‌قل کردن آب

* to boil dry: تمام شدن آب کتری بر اثر جوشیدن زیاد

* burnt out: سوختن وسیله برقی

* unattended: بدون مراقبت / به حال خود رها شده

۱۲. هود آشپزخانه (مشکل: لرزش شدید و صدا دادن)
هود آشپزخانه وقتی روی دور تند گذاشته میشه، جوری می‌لرزه که انگار الانه که از سقف بکنه و بیفته پایین. یه صدای تق‌تق خیلی بلندی هم میده، انگار که پروانه فنش شل شده یا به بدنه گیر می‌کنه. وقتی روشنش می‌کنم کل کابینت‌های اطرافش هم شروع به لرزیدن می‌کنن. اصلاً نمی‌شه تحملش کرد، مجبورم فعلاً روی دور کند بذارمش که اونم اصلاً بو رو نمی‌کشه.

English Translation:

"When the range hood is set to high speed, it vibrates so violently it feels like it's going to detach from the wall and fall down. It also makes this loud rattling noise, as if the fan blade is loose or hitting the housing. When I turn it on, all the surrounding cabinets start shaking too. It's unbearable, so I have to keep it on low for now, but then it doesn't draw out any of the cooking odors."

* range hood: هود آشپزخانه

* rattling noise: صدای تق‌تق / لرزش قطعات به هم

* housing: بدنه / قاب محافظ وسیله

* to draw out odors: بیرون کشیدن بوها

۱۳. مودم وای‌فای (مشکل: قطعی مداوم سیگنال)
روتر وای‌فای ما کلافه‌ام کرده؛ چراغ اینترنتش مدام قرمز میشه و سیگنال کلاً می‌پره. باید روزی ده بار از برق بکشمش و دوباره بزنم تا شاید وصل بشه, اونم فقط واسه نیم ساعت! سرعت دانلود هم که به شدت افت کرده و صفحات وب اصلاً لود نمی‌شن. نمی‌دونم ایراد از خط تلفنه یا خود دستگاه دیگه عمرش رو کرده و باید تعویض بشه.

English Translation:

"Our Wi-Fi router is driving me up the wall; the internet light keeps turning red and the connection drops constantly. I have to unplug it and plug it back in ten times a day just to get it to reconnect, and even then, it only lasts for half an hour! The download speed has also tanked, and web pages won't load at all. I don't know if it's an issue with the provider line or if the device itself is past its prime and needs upgrading."

* driving me up the wall: کلافه کردن / دیوانه کردن کسی

* connection drops: قطع شدن سیگنال / اتصال

* tanked: (اصطلاح عامیانه) به شدت افت کردن / سقوط کردن

* past its prime: عمر خود را کردن / قدیمی و فرسوده شدن

۱۴. فلاش تانک / سیفون (مشکل: بند نیامدن آب و نشتی)
سیفون دستشویی خراب شده و آبش بند نمی‌آد. بعد از اینکه سیفون رو می‌کشی، مکانیزمش گیر می‌کنه و آب همین‌طور یکسره تو کاسه توالت روانه میشه. با این وضعیت هم آب هدر میره و هم صدای پر شدن مداوم مخزنش اعصاب نذاشته واسمون. فکر کنم شناورش تنظیم نیست یا واشرش پوسیده و نیاز به تعویض داره.

English Translation:

"The toilet flush is broken and it won't stop running. After you flush, the mechanism gets stuck, and the water just keeps continuously draining into the bowl. With things like this, not only is it wasting water, but the constant sound of the tank refilling is getting on my nerves. I think the float valve is misaligned or the flapper is worn out and needs replacing."

* won't stop running: بند نیامدن آب (در سیفون یا شیر آب)

* getting on my nerves: روی اعصاب بودن

* float valve: شناور (سیفون یا مخزن)

* flapper / washer: واشر / دریچه لاستیکی تخلیه

۱۵. قفل برقی درب حیاط (مشکل: باز نکردن با آیفون)
آیفون تصویری زنگ می‌خوره و ما صدای طرف رو داریم، ولی هرچی دکمه درب‌بازکن رو فشار میدیم، قفل برقی عمل نمی‌کنه. مجبوریم هر دفعه دو طبقه بیایم پایین و در رو دستی با کلید باز کنیم. صدای تیک کات‌کننده از پنل میاد، ولی قفل انگار زبونش گیر کرده یا برق بهش نمی‌رسه. تو این سرما، بالا و پایین اومدن از پله‌ها واقعاً دردسره.

English Translation:

"The video intercom rings fine and we can hear the person outside, but no matter how much we press the buzzer, the electric door lock won't budget. We have to walk down two flights of stairs every single time to unlock the door manually with the key. You can hear a clicking sound from the panel, but the latch seems to be jammed or it’s not getting any power. Going up and down the stairs in this cold is a real hassle."

* intercom: آیفون (درب‌بازکن خانگی)

* buzzer: دکمه درب‌بازکن

* flights of stairs: طبقات پله

* latch: زبانه قفل

* a real hassle: یک دردسر واقعی

۱۶. کلید و پریز برقی (مشکل: شل شدن و جرقه زدن هنگام ورود دوشاخه)
پریز برق اتاق خواب کلاً شل شده و از توی دیوار دراومده. هر وقت دوشاخه شارژر یا آباژور رو می‌زنم توش، یه جرقه بزرگ می‌زنه و صدای وِزوِز میده. می‌ترسم جرقه باعث آتش‌سوزی بشه یا به دستگاه‌ها آسیب بزنه. فعلاً روی پریز رو با چسب پهن پوشوندم که کسی اشتباهی ازش استفاده نکنه تا یک برق‌کار بیاد و مغزی قوطی رو سفت یا کلاً عوض کنه.

English Translation:

"The wall outlet in the bedroom has come loose and is popping out of the drywall. Whenever I plug in my charger or the lamp, it throws a big spark and makes a buzzing sound. I’m terrified the sparking might cause a fire or fry my gadgets. I’ve taped over the outlet for now so nobody uses it by mistake until an electrician can come and secure or replace the housing."

* wall outlet / socket: پریز برق

* come loose: شل شدن

* throws a spark: جرقه زدن

* taped over: چسب زدن روی چیزی برای پوشاندن

۱۷. مخلوط‌کن (مشکل: هرز شدن کوپلینگ و نچرخیدن تیغه)
داشتم با مخلوط‌کن شیک درست می‌کردم که یهو موتور شروع کرد به گاز خوردن ولی تیغه‌ها دیگه نچرخیدن. پارچ رو که برداشتم، دیدم قطعه پلاستیکی زیر پارچ دندانه‌هاش کاملاً صاف و هرز شده. موتور سالمه و میچرخه، ولی چون این کوپلینگ خورده شده، نیرو به تیغه منتقل نمیشه. باید ببرم نمایندگی ببینم قطعه یدکیش رو دارن یا نه.

English Translation:

"I was making a shake with the blender when suddenly the motor started revving up, but the blades stopped spinning. When I lifted the pitcher, I noticed the plastic teeth on the coupling underneath were completely stripped. The motor is fine and spins, but since the coupling is worn down, it's not engaging the blades. I need to take it to the service center to see if they have a spare part."

* revving up: گاز خوردن موتور / بالا رفتن دور موتور بدون درگیری

* pitcher / jar: پارچ مخلوط‌کن

* teeth are stripped: دندانه‌ها هرز و صاف شده‌اند

* engaging: درگیر کردن (قطعات مکانیکی با هم)

۱۸. شیر آب آشپزخانه (مشکل: هرز شدن فلکه و چکه کردن مدام)
شیر آب سینک ظرفشویی هرز شده؛ هرچقدر سفتش می‌کنم باز هم چکه می‌کنه. در واقع اصلاً انتهای پیچش قفل نمیشه و دور خودش می‌چرخه. صدای چکه چکه آب توی سینک تو سکوت شب روی مخه و نمی‌ذاره بخوابم. یه دستمال بستم دورش که صداش کمتر بشه، ولی فردا اول وقت باید مغزی شیر رو عوض کنم تا کار دستمون نداده.

English Translation:

"The kitchen sink faucet is stripped; no matter how tight I turn it, it just keeps dripping. In fact, the handle doesn't lock at the end at all, it just spins in circles. The sound of the water dripping into the sink in the dead of night is driving me crazy and keeping me awake. I tied a rag around it to muffle the noise, but first thing tomorrow, I need to replace the valve cartridge before it causes a bigger problem."

* faucet / tap: شیر آب

* spins in circles: دور خود چرخیدن (هرز شدن)

* in the dead of night: در دل شب / سکوت شب

* to muffle the noise: خفه کردن / کم کردن صدا

* valve cartridge: مغزی شیر آب

۱۹. تصفیه آب (مشکل: افت فشار خروجی و طعم بد آب)
آب خروجی از شیر تصفیه آب به قدری باریک شده که پنج دقیقه طول می‌کشه یه لیوان آب پر بشه! علاوه بر افت فشار، حس می‌کنم آب یه طعم و بوی ناخوشایندی هم گرفته، انگار که ماندگی داره. مطمئنم که زمان تعویض فیلترهای سه گانه زیرش خیلی وقته گذشته و کاملاً کیپ شدن. فردا باید زنگ بزنم پشتیبانی تا بیان فیلترها رو عوض کنن و مخزن رو هم شارژ کنن.

English Translation:

"The water coming out of the purifier tap has dwindled to a trickle; it takes literally five minutes just to fill up a single glass! On top of the low pressure, I feel like the water has developed a funky taste and smell, kind of stale. I'm positive that the three filters underneath are way overdue for a change and are completely clogged up. I need to call support tomorrow to have the filters replaced and the tank repressurized."

* dwindled to a trickle: تبدیل به یک باریکه آب / چکه شدن (افت شدید جریان آب)

* funky taste: طعم عجیب و ناخوشایند

* way overdue: خیلی وقتش گذشته (دیر شده)

* repressurized: شارژ مجدد فشار هوا (در مخزن تصفیه آب)

۲۰. لوستر کنترل‌دار (مشکل: قاطی کردن کیت کنترل و سوختن ال‌ای‌دی‌ها)
لوستر کنترل‌دار پذیرایی قاطی کرده. با ریموتش که می‌خوام روشن کنم، یا اصلاً فرمان نمی‌گیره یا یهو نورش خودبخود کم و زیاد میشه و چشمک می‌زنه. دیشب هم نصف ال‌ای‌دی‌های دورش کلاً خاموش شدن و دیگه روشن نشدن. فکر کنم ترانسش سوخته یا برد الکترونیکی داخلش اتصالی کرده. باید کلاً بازش کنم ببرم لاله زار نشون بدم.

English Translation:

"The remote-controlled chandelier in the living room is glitching out. When I try to turn it on with the remote, it either doesn't respond at all, or the light randomly dims and brightens on its own, flickering like crazy. Then last night, half of the LEDs around it went completely dead and won't turn back on. I suspect the driver is fried or the circuit board inside has shorted out. I'll probably have to take it down completely and bring it to a repair shop."

* glitching out: قاطی کردن (دستگاه‌های الکترونیکی و دیجیتال)

* dims and brightens: کم و زیاد شدن نور

* went completely dead: کلاً خاموش شدن و از کار افتادن

* driver / transformer: ترانسفورماتور / راه‌انداز قطعات الکترونیکی

`;

export const homeAppliances = parseCards(raw, {
  category: 'Home Appliances',
  startId: 201,
});