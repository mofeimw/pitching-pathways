document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';

  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const h1Link = document.createElement('a');
  h1Link.href = 'page.js';
  h1Link.textContent = 'Pitching Pathways';
  h1.appendChild(h1Link);
  header.appendChild(h1);

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const navLinks = ['Home', 'About', 'Team', 'Join'];

  for (const linkText of navLinks) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = linkText.toLowerCase() + '.html'; // Assuming you have corresponding HTML files for each link
    a.textContent = linkText;
    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);

  const aboutpic1 = document.createElement('div');
  aboutpic1.id = 'aboutpic1';
  aboutpic1.title = 'Pitching Pathways logo';

  const flow = document.createElement('div');
  flow.className = 'flow';

  const main = document.createElement('main');
  const h2 = document.createElement('h2');
  h2.textContent = 'Pitching Pathways: The Future of AI Investing';
  main.appendChild(h2);

  const section1 = document.createElement('section');
  const h3_1 = document.createElement('h3');
  h3_1.textContent = 'Why should you use Pitching Pathways';
  const p1 = document.createElement('p');
  p1.textContent = 'Pitching Pathways provides a path to the future of AI investment. Using Pitching Pathways, you will have that one easy step to allow you to invest in the future of AI no matter the time or place. All it takes is one click, and you will be on your way to investing in the future.';
  section1.appendChild(h3_1);
  section1.appendChild(p1);

  const section2 = document.createElement('section');
  const h3_2 = document.createElement('h3');
  h3_2.textContent = 'Who made it';
  const p2_1 = document.createElement('p');
  p2_1.textContent = "Pitching Pathways was made from the idea of our CEO Peyton Loeffelbein. He hated how he wasn't able to find the latest and trending AI that could help us in the future. So he came up with the idea of creating a place to do so, and this was how the idea of Pitching Pathways was formed.";
  const p2_2 = document.createElement('p');
  p2_2.textContent = "Propelling this idea into action, he reached out to the person we now know as the CFO Phuoc Hua to build the website and bring the idea to life. They came up with an idea to build a team to make this small bud of light that they call Pitching Pathways come to life.";
  const p2_3 = document.createElement('p');
  p2_3.textContent = 'Placeholder';
  section2.appendChild(h3_2);
  section2.appendChild(p2_1);
  section2.appendChild(p2_2);
  section2.appendChild(p2_3);

  main.appendChild(section1);
  main.appendChild(section2);

  const footer = document.createElement('footer');
  const em = document.createElement('em');
  const small = document.createElement('small');
  const copyright = document.createTextNode('Copyright © 2023 Pitching Pathways LLC ');
  const br = document.createElement('br');
  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:pitchingpathways@gmail.com';
  emailLink.textContent = 'pitchingpathways@gmail.com';

  small.appendChild(copyright);
  small.appendChild(br);
  small.appendChild(emailLink);
  em.appendChild(small);
  footer.appendChild(em);

  wrapper.appendChild(header);
  wrapper.appendChild(nav);
  wrapper.appendChild(aboutpic1);
  wrapper.appendChild(flow);
  wrapper.appendChild(main);
  wrapper.appendChild(footer);

  document.body.appendChild(wrapper);
});
