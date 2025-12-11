document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const fadeEls = document.querySelectorAll(".fade-in");
  const faqItems = document.querySelectorAll(".faq-item");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // ナビの背景切り替え
  const onScroll = () => {
    if (window.scrollY > 30) {
      header?.classList.add("nav-scrolled");
    } else {
      header?.classList.remove("nav-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // フェードイン
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeEls.forEach((el) => observer.observe(el));

  // FAQアコーディオン
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // スムーズスクロール（同一ページ内のみ）
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href")?.substring(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
      navLinks?.classList.remove("open");
      menuToggle?.classList.remove("active");
    });
  });

  // メニューオーバーレイ要素の作成
  let overlay = null;
  const createOverlay = () => {
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "menu-overlay";
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 998;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => {
        navLinks?.classList.remove("open");
        menuToggle?.classList.remove("active");
        if (overlay) {
          overlay.style.opacity = "0";
          setTimeout(() => overlay?.remove(), 300);
          overlay = null;
        }
      });
    }
    setTimeout(() => {
      if (overlay) overlay.style.opacity = "1";
    }, 10);
  };

  const removeOverlay = () => {
    if (overlay) {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay?.remove();
        overlay = null;
      }, 300);
    }
  };

  // ハンバーガーメニュー
  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.contains("open");
    navLinks?.classList.toggle("open");
    menuToggle.classList.toggle("active");
    
    if (!isOpen) {
      createOverlay();
    } else {
      removeOverlay();
    }
  });

  // メニュー内リンククリックで閉じる
  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle?.classList.remove("active");
      removeOverlay();
    });
  });
});

