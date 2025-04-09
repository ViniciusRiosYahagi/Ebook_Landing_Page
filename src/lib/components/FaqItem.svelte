<script>
  import chevronDown from "assets/icons/chevron-down.svg";

  let { faq, isExpanded, ...props } = $props();
</script>

<button class="container" class:container-expanded={isExpanded} {...props}>
  <div class="question-and-answer">
    <p class="question mb-s">{faq.question}</p>
    <p class="answer">
      {faq.answer}
    </p>
  </div>
  <img src={chevronDown} alt="icon" />
</button>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid gray;
    text-align: left;
  }

  .question-and-answer {
    padding-right: 150px;
    flex-grow: 1;
  }

  .answer {
    max-height: 0px;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.3s ease-out,
      opacity 0.3s ease-out;
  }

  button img {
    width: 24px;
    height: 24px;

    transition: transofrm 0.3s linear;
  }

  .question {
    font-weight: 600;
  }

  .container-expanded img {
    transform: rotate(180deg);
  }

  .container-expanded .answer {
    max-height: unset;
    opacity: 1;
  }
</style>
