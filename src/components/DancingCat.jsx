import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isDancing, setIsDancing] = useState(false)

  const toggleDance = () => {
    setIsDancing(!isDancing)
  }

  // Keyboard navigation - Space bar to toggle
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && event.target.tagName !== 'BUTTON') {
        event.preventDefault()
        toggleDance()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isDancing])

  return (
    <div className="dancing-cat-container" role="main">
      <div
        className={`cat-wrapper ${isDancing ? 'dancing' : ''}`}
        role="img"
        aria-label={isDancing ? '춤추는 고양이' : '쉬고 있는 고양이'}
      >
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
          aria-hidden="true"
        />
      </div>

      <button
        className={`control-button ${isDancing ? 'dancing' : ''}`}
        onClick={toggleDance}
        aria-pressed={isDancing}
        aria-label={isDancing ? '춤 멈추기' : '춤 시작하기'}
      >
        {isDancing ? '⏸ Stop Dancing' : '▶ Start Dancing'}
      </button>

      <p className="status-text" role="status" aria-live="polite">
        {isDancing ? '고양이가 신나게 춤추고 있어요! 🎵' : '고양이가 쉬고 있어요 😴'}
      </p>

      <p className="keyboard-hint">
        💡 Tip: 스페이스바를 눌러 춤을 시작/멈출 수 있어요!
      </p>
    </div>
  )
}

export default DancingCat
